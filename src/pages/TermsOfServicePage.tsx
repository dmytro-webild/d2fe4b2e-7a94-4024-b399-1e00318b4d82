import PolicyContent from "@/components/sections/legal/PolicyContent";

export default function TermsOfServicePage() {
  const sections = [
    {
      heading: "1. Acceptance of Terms",
      content: [
        {
          type: "paragraph" as const,
          text: "Welcome to TylerBuilds. By accessing or using our website, requesting project proposals, or engaging our web development services, you agree to be bound by these Terms of Service ('Terms') and all applicable laws and regulations of the Province of Alberta and Canada. If you do not agree to these Terms, you must refrain from using our website or services.",
        },
      ],
    },
    {
      heading: "2. Scope of Services",
      content: [
        {
          type: "paragraph" as const,
          text: "TylerBuilds provides professional website design, custom software development, digital consulting, and domain integration services ('Services'). Specific deliverables, timelines, pricing structures, and client responsibilities are governed by individual project agreements or statements of work executed between TylerBuilds and the client.",
        },
      ],
    },
    {
      heading: "3. User Conduct & Acceptable Use",
      content: [
        {
          type: "paragraph" as const,
          text: "You agree to use our website and services only for lawful purposes. You shall not:",
        },
        {
          type: "list" as const,
          items: [
            "Transmit, upload, or introduce any malware, viruses, trojans, or malicious code into our infrastructure.",
            "Attempt unauthorized access to any part of the site, server, network, or connected databases.",
            "Engage in automated data scraping, harvesting, or reverse engineering of software or site components.",
            "Utilize our communication tools or contact forms to send unsolicited commercial electronic communications ('spam') in violation of Canada's Anti-Spam Legislation (CASL).",
          ],
        },
      ],
    },
    {
      heading: "4. Intellectual Property Rights",
      content: [
        {
          type: "paragraph" as const,
          text: "All website code, UI designs, graphics, branding elements, typography, and text on this platform are owned by or licensed to TylerBuilds and are protected under Canadian intellectual property laws.",
        },
        {
          type: "paragraph" as const,
          text: "For client development projects, ownership of custom design deliverables and client-specific code transfers to the client upon full payment of all contracted project fees, while TylerBuilds retains rights to pre-existing libraries, general tools, and open-source frameworks.",
        },
      ],
    },
    {
      heading: "5. Electronic Messaging & Anti-Spam (CASL)",
      content: [
        {
          type: "paragraph" as const,
          text: "In compliance with Canada's Anti-Spam Legislation (CASL), TylerBuilds requires express consent prior to sending commercial electronic communications. By completing our contact form and selecting the express consent checkbox, you agree to receive project updates, announcements, and commercial communications.",
        },
        {
          type: "paragraph" as const,
          text: "You may opt out or withdraw consent at any time by utilizing the unsubscribe link in our electronic messages or by contacting hamiltontyler10@gmail.com.",
        },
      ],
    },
    {
      heading: "6. Limitation of Liability & Warranty Disclaimer",
      content: [
        {
          type: "paragraph" as const,
          text: "Our website and default content are provided on an 'as is' and 'as available' basis without warranties of any kind, whether express, implied, or statutory, to the maximum extent allowed under Alberta law.",
        },
        {
          type: "paragraph" as const,
          text: "TylerBuilds shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of your use of or inability to use the site or services, including loss of data, profit, or business interruption.",
        },
      ],
    },
    {
      heading: "7. Governing Law & Jurisdiction",
      content: [
        {
          type: "paragraph" as const,
          text: "These Terms of Service are governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein, without giving effect to conflict of law principles.",
        },
        {
          type: "paragraph" as const,
          text: "You irrevocably agree that the courts of the Province of Alberta located in Calgary shall have exclusive jurisdiction to hear and decide any suit, action, or proceeding arising out of or related to these Terms.",
        },
      ],
    },
    {
      heading: "8. Severability & Modifications",
      content: [
        {
          type: "paragraph" as const,
          text: "If any provision of these Terms is deemed invalid or unenforceable by an Alberta court of competent jurisdiction, such provision shall be enforced to the maximum extent permissible and the remaining provisions shall remain in full force.",
        },
        {
          type: "paragraph" as const,
          text: "We reserve the right to modify these Terms at any time. Notice of revisions will be provided by posting updated Terms on this website.",
        },
      ],
    },
    {
      heading: "9. Business Contact Information",
      content: [
        {
          type: "paragraph" as const,
          text: "For questions, legal notices, or issues regarding these Terms of Service, please contact:",
        },
        {
          type: "list" as const,
          items: [
            "TylerBuilds",
            "Attention: Tyler Hamilton",
            "Location: Calgary, Alberta, Canada",
            "Email: hamiltontyler10@gmail.com",
            "Phone: (289) 209-5888",
          ],
        },
      ],
    },
  ];

  return (
    <PolicyContent
      title="Terms of Service"
      subtitle="Last Updated: November 2026 | Governed by the Laws of Alberta, Canada"
      sections={sections}
    />
  );
}
