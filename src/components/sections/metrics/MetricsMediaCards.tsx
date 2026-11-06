import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Metric = {
  value: string;
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const MetricsMediaCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  metrics,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  metrics: Metric[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Metrics section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
        <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
          <p>{tag}</p>
        </div>

        <TextAnimation
          text={title}
          variant={textAnimation}
          gradientText={true}
          tag="h2"
          className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
        />

        <TextAnimation
          text={description}
          variant={textAnimation}
          gradientText={false}
          tag="p"
          className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
        />

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-content-width mx-auto">
        {metrics.map((metric, index) => {
          const isEven = index % 2 === 1;
          const isLast = index === metrics.length - 1;
          const isOddTotal = metrics.length % 2 !== 0;
          const shouldSpanFull = isLast && isOddTotal;

          return (
            <ScrollReveal
              variant="fade"
              key={metric.value + metric.title}
              className={cls("grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch", shouldSpanFull && "md:col-span-2")}
            >
              <div className={cls(
                "flex flex-col justify-between gap-4 xl:gap-5 p-6 xl:p-7 2xl:p-8 card rounded overflow-hidden min-h-[220px] sm:min-h-[250px] h-full min-w-0",
                isEven && "order-2 sm:order-1"
              )}>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight break-words min-w-0">{metric.value}</span>
                <div className="flex flex-col gap-2 min-w-0 mt-auto">
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug break-words min-w-0">{metric.title}</span>
                  <div className="w-full h-px bg-accent/50" />
                  <p className="text-sm sm:text-base leading-snug break-words min-w-0">{metric.description}</p>
                </div>
              </div>

              <div className={cls(
                "rounded overflow-hidden min-h-[200px] sm:min-h-0 aspect-video sm:aspect-auto h-full w-full",
                isEven && "order-1 sm:order-2"
              )}>
                <ImageOrVideo imageSrc={metric.imageSrc} videoSrc={metric.videoSrc} />
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default MetricsMediaCards;
