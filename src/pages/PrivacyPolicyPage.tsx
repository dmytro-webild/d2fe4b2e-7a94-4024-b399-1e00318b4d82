import PolicyContent from "@/components/sections/legal/PolicyContent";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      heading: "1. Overview & Statutory Authority",
      content: [
        {
          type: "paragraph" as const,
          text: "TylerBuilds ('we', 'us', or 'our') respects your privacy and is committed to protecting the personal information of our clients, website visitors, and business partners. This Privacy Policy outlines how we collect, use, disclose, and protect personal information in compliance with Alberta's Personal Information Protection Act ('PIPA'), Canada's Personal Information Protection and Electronic Documents Act ('PIPEDA'), and Canada's Anti-Spam Legislation ('CASL').",
        },
        {
          type: "paragraph" as const,
          text: "By accessing our website or submitting personal information to us, you consent to the practices described in this policy.",
        },
      ],
    },
    {
      heading: "2. Accountability & Contact Information",
      content: [
        {
          type: "paragraph" as const,
          text: "We are accountable for all personal information under our control. In accordance with Alberta PIPA, we have designated a Privacy Officer to handle inquiries, requests for access or correction, and privacy complaints.",
        },
        {
          type: "paragraph" as const,
          text: "If you have questions or concerns regarding our privacy practices, please contact our Privacy Officer:",
        },
        {
          type: "list" as const,
          items: [
            "Privacy Officer: Tyler Hamilton",
            "Business Name: TylerBuilds",
            "Location: Edmonton, Alberta, Canada",
            "Email: hamiltontyler10@gmail.com",
            "Phone: (289) 209-5888",
          ],
        },
      ],
    },
    {
      heading: "3. Collection of Personal Information",
      content: [
        {
          type: "paragraph" as const,
          text: "We collect personal information necessary to deliver custom web building, design, and technical consulting services. The types of personal information collected include:",
        },
        {
          type: "list" as const,
          items: [
            "Contact Details: Your full name, email address, phone number, and organization name submitted via contact forms or direct inquiries.",
            "Project Specifications: Information regarding your business goals, project parameters, budget preferences, and design assets.",
            "Electronic Communication Consent: Timestamped records of express opt-in consent for commercial electronic messages required under CASL.",
            "Technical Data: IP addresses, browser types, device identifiers, and pages visited collected through standard web logs to ensure website performance and security.",
          ],
        },
      ],
    },
    {
      heading: "4. Purpose of Collection & Use",
      content: [
        {
          type: "paragraph" as const,
          text: "Personal information is collected and used strictly for identified business purposes, including:",
        },
        {
          type: "list" as const,
          items: [
            "Responding to client inquiries, providing proposals, and executing website development contracts.",
            "Communicating project milestones, domain setups, and administrative updates.",
            "Sending commercial electronic messages (such as newsletters, project quotes, and service announcements) where express consent has been granted under CASL.",
            "Maintaining the security, performance, and operational integrity of our digital platforms.",
            "Complying with statutory obligations and regulatory requirements under Alberta and Canadian law.",
          ],
        },
      ],
    },
    {
      heading: "5. Express Consent & Anti-Spam (CASL) Compliance",
      content: [
        {
          type: "paragraph" as const,
          text: "In compliance with Canada's Anti-Spam Legislation (CASL), we will not send you commercial electronic messages ('CEMs') unless we have received your explicit express consent or have an established business relationship under applicable statutory exemptions.",
        },
        {
          type: "paragraph" as const,
          text: "When you complete our contact form and check the express consent box, you confirm your consent to receive electronic messages from TylerBuilds. You retain the right to withdraw consent at any time.",
        },
        {
          type: "paragraph" as const,
          text: "To withdraw consent or unsubscribe from future commercial messages, you may click the 'Unsubscribe' link present in any commercial email or contact us directly at hamiltontyler10@gmail.com. Consent withdrawal requests are processed promptly within 10 business days.",
        },
      ],
    },
    {
      heading: "6. Disclosure of Personal Information",
      content: [
        {
          type: "paragraph" as const,
          text: "We do not sell, rent, trade, or transfer your personal information to third parties. Disclosure of personal information occurs only under limited circumstances:",
        },
        {
          type: "list" as const,
          items: [
            "Authorized Service Providers: Third-party service providers (such as hosting, analytics, and email delivery platforms) bound by contractual obligations to protect data confidentiality.",
            "Legal Requirements: When required or permitted by Alberta PIPA, PIPEDA, court orders, search warrants, or statutory mandates.",
            "Business Transfers: In connection with a corporate reorganization, merger, or asset sale, subject to confidentiality protections.",
          ],
        },
      ],
    },
    {
      heading: "7. Data Safeguards & Retention",
      content: [
        {
          type: "paragraph" as const,
          text: "We maintain administrative, physical, and technical safeguards appropriate to the sensitivity of personal information to prevent unauthorized access, collection, use, disclosure, copying, modification, or disposal.",
        },
        {
          type: "paragraph" as const,
          text: "Personal information is retained only for as long as necessary to fulfill the purpose for which it was collected or to satisfy legal and business requirements under Alberta law.",
        },
      ],
    },
    {
      heading: "8. Individual Rights: Access & Correction",
      content: [
        {
          type: "paragraph" as const,
          text: "Under Alberta PIPA, individuals residing in Alberta and users of our services have the right to request access to their personal information under our custody or control.",
        },
        {
          type: "paragraph" as const,
          text: "You also have the right to request corrections if you identify errors or omissions in your personal information. Written requests should be submitted to our Privacy Officer at hamiltontyler10@gmail.com. We respond to all formal access and correction requests within 30 calendar days.",
        },
      ],
    },
    {
      heading: "9. Updates to Policy",
      content: [
        {
          type: "paragraph" as const,
          text: "We reserve the right to modify this Privacy Policy periodically to reflect changes in legal mandates or our operational practices. Updates will be published on this page with a revised date statement.",
        },
      ],
    },
  ];

  return (
    <PolicyContent
      title="Privacy Policy"
      subtitle="Last Updated: November 2026 | Alberta, Canada (PIPA & CASL Compliant)"
      sections={sections}
    />
  );
}
