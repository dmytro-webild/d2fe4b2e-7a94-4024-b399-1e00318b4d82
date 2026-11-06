import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { sendContactEmail } from "@/lib/api/email";

type InputField = {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

type TextareaField = {
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
};

type ContactSplitFormProps = {
  tag: string;
  title: string;
  description: string;
  inputs: InputField[];
  textarea?: TextareaField;
  buttonText: string;
  onSubmit?: (data: Record<string, string>) => void;
  textAnimation: "slide-up" | "fade-blur" | "fade";
  showConsentCheckbox?: boolean;
  consentText?: string;
  consentRequired?: boolean;
  businessNotice?: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const ContactSplitForm = ({
  tag,
  title,
  description,
  inputs,
  textarea,
  buttonText,
  onSubmit,
  imageSrc,
  videoSrc,
  textAnimation,
  showConsentCheckbox = false,
  consentText,
  consentRequired = true,
  businessNotice,
}: ContactSplitFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputs.forEach((input) => {
      initial[input.name] = "";
    });
    if (textarea) {
      initial[textarea.name] = "";
    }
    return initial;
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showConsentCheckbox && consentRequired && !consentChecked) {
      setError("Please check the express consent box to proceed.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const submissionData = {
        ...formData,
        expressConsentGiven: showConsentCheckbox ? (consentChecked ? "Yes" : "No") : "Not applicable",
      };
      await sendContactEmail({ formData: submissionData });
      onSubmit?.(submissionData);
      const reset: Record<string, string> = {};
      inputs.forEach((input) => {
        reset[input.name] = "";
      });
      if (textarea) {
        reset[textarea.name] = "";
      }
      setFormData(reset);
      setConsentChecked(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade-blur" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 md:p-10 card rounded">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>{tag}</p>
                </div>

                <TextAnimation
                  text={title}
                  variant={textAnimation}
                  gradientText={true}
                  tag="h2"
                  className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
                />

                <TextAnimation
                  text={description}
                  variant={textAnimation}
                  gradientText={false}
                  tag="p"
                  className="text-lg md:text-xl leading-snug text-balance"
                />
              </div>

              <div className="flex flex-col gap-3">
                {inputs.map((input) => (
                  <input
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={formData[input.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                    required={input.required}
                    aria-label={input.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded"
                  />
                ))}

                {textarea && (
                  <textarea
                    placeholder={textarea.placeholder}
                    value={formData[textarea.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [textarea.name]: e.target.value })}
                    required={textarea.required}
                    rows={textarea.rows || 5}
                    aria-label={textarea.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none resize-none card rounded"
                  />
                )}

                {showConsentCheckbox && (
                  <div className="flex flex-col gap-2 pt-3 border-t border-foreground/15 mt-1">
                    <label className="flex items-start gap-3 text-xs md:text-sm leading-relaxed opacity-85 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        required={consentRequired}
                        className="mt-1 rounded border-foreground/30 accent-primary cursor-pointer shrink-0 size-4"
                      />
                      <span>
                        {consentText ||
                          "I provide express consent to receive commercial electronic messages (including project quotes, news, and updates) from TylerBuilds in accordance with Canada's Anti-Spam Legislation (CASL). I understand I can withdraw my consent at any time."}{" "}
                        <a href="/privacy" className="underline hover:opacity-100 transition-opacity font-medium">
                          Privacy Policy
                        </a>
                      </span>
                    </label>

                    {businessNotice && (
                      <p className="text-[11px] md:text-xs opacity-60 leading-tight">
                        {businessNotice}
                      </p>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center w-full h-10 px-6 text-sm primary-button text-primary-cta-text rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isLoading ? "Sending..." : buttonText}
                </button>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
              </div>
            </form>
          </div>

          <div className="h-100 md:h-auto card rounded overflow-hidden">
            <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="size-full object-cover rounded" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSplitForm;
