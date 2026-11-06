import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Build Your Vision"
      title="Professional Websites Built for Success"
      description="I help businesses build stunning, functional, and performance-driven websites that convert. Custom designs, modern tech."
      primaryButton={{
        text: "Start Building",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Portfolio",
        href: "#portfolio",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/analysis-strategy-study-information-business-planning_53876-133682.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-office-table-with-laptop_1153-3802.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="About Tyler"
      title="Your Trusted Web Partner"
      description="With years of experience, I translate business requirements into powerful web solutions. From initial design to launch, I ensure your site stands out."
      imageSrc="http://img.b2bpic.net/free-photo/people-working-together-animation-studio_23-2149208004.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedSteps
      tag="Our Process"
      title="Simple 3-Step Success"
      description="Professional web building, made simple."
      steps={[
        {
          tag: "01",
          title: "Requirement Analysis",
          subtitle: "Understanding needs",
          description: "Defining your project goals and requirements thoroughly.",
          imageSrc: "http://img.b2bpic.net/free-photo/website-development_53876-95315.jpg",
        },
        {
          tag: "02",
          title: "Design & Development",
          subtitle: "Crafting excellence",
          description: "Building a custom, responsive website tailored for performance.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-checking-report-tablet_482257-120320.jpg",
        },
        {
          tag: "03",
          title: "Deployment & Launch",
          subtitle: "Going live",
          description: "Ensuring a seamless deployment to your domain.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-holding-smartphone_23-2150208243.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Impact"
      title="Driving Results"
      description="Data-driven web experiences that deliver ROI."
      metrics={[
        {
          value: "50+",
          title: "Projects Completed",
          description: "Websites built across industries.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-growth-chart_23-2152011773.jpg",
        },
        {
          value: "100%",
          title: "Client Satisfaction",
          description: "Committed to delivering your vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/review-evaluation-satisfaction-customer-service-feedback-sign-icon_53876-122935.jpg",
        },
        {
          value: "3x",
          title: "Load Speed",
          description: "Faster than standard industry sites.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-confident-blonde-office-worker-man-headphones-sits-desk-points-himself_141793-31581.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesImageBento
      tag="Portfolio"
      title="Featured Work"
      description="A glimpse of modern digital experiences."
      items={[
        {
          title: "Fashion Store",
          description: "Elegant clothing boutique site",
          imageSrc: "http://img.b2bpic.net/free-photo/website-development-layout-sketch-drawing_53876-124188.jpg",
        },
        {
          title: "Bistro Site",
          description: "Modern dining experience",
          imageSrc: "http://img.b2bpic.net/free-photo/food-content-creator-filming-variety-dishes-upload-internet_23-2151461714.jpg",
        },
        {
          title: "Legal Firm",
          description: "Professional consulting portal",
          imageSrc: "http://img.b2bpic.net/free-photo/he-s-hard-working-his-laptop_329181-15238.jpg",
        },
        {
          title: "Tech Startup",
          description: "High-performance SaaS platform",
          imageSrc: "http://img.b2bpic.net/free-photo/person-front-computer-working-html_23-2150038834.jpg",
        },
        {
          title: "Photo Studio",
          description: "Minimalist portfolio",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-grey-laptop-with-camera_23-2148190016.jpg",
        },
        {
          title: "Gym Website",
          description: "Fitness community platform",
          imageSrc: "http://img.b2bpic.net/free-photo/view-gym-room-training-sports_23-2151699529.jpg",
        },
        {
          title: "Finance App",
          description: "Secure analytics dashboard",
          imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126876.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
      <PricingHighlightedCards
        tag="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the project plan that fits your vision and goals. Clear pricing with zero hidden fees."
        plans={[
          {
            tag: "Small Projects",
            price: "$500",
            description: "Landing pages, simple portfolios, and small sites.",
            features: [
              "Custom Responsive Design",
              "Up to 3 Main Pages / Sections",
              "Speed & SEO Optimization",
              "Contact Form Integration",
            ],
            primaryButton: {
              text: "Get Started",
              href: "#contact",
            },
          },
          {
            tag: "Medium Projects",
            price: "$750",
            description: "Growing business sites and multi-page applications.",
            highlight: "Most Popular",
            features: [
              "Custom Design & Layouts",
              "Up to 7 Pages / Complex Layouts",
              "Advanced Forms & Analytics",
              "Priority Support & Revisions",
            ],
            primaryButton: {
              text: "Get Started",
              href: "#contact",
            },
          },
          {
            tag: "Large Projects",
            price: "$1,000",
            description: "Complex web platforms, e-commerce, or full custom builds.",
            features: [
              "Comprehensive Multi-Page Site",
              "Custom Web Functionality",
              "Full E-Commerce / API Integration",
              "Dedicated Launch & Ongoing Support",
            ],
            primaryButton: {
              text: "Get Started",
              href: "#contact",
            },
          },
        ]}
        note="Note: All options include an additional $150 maintenance fee."
        textAnimation="slide-up"
      />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Help"
      title="Common Questions"
      description="Need to know something? Find answers here."
      items={[
        {
          question: "What's the process?",
          answer: "I handle everything from design to final hosting.",
        },
        {
          question: "What tech do you use?",
          answer: "I use modern frameworks like React, Next.js, and Tailwind.",
        },
        {
          question: "What's the timeline?",
          answer: "Small projects can launch in as little as 1 week.",
        },
        {
          question: "Do you provide hosting?",
          answer: "Yes, I guide you through the process or handle it for you.",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
      <ContactSplitForm
        tag="Get In Touch"
        title="Ready to Build Your Website?"
        description="Fill out the form below to start your project. We respond to all inquiries within 24 business hours."
        inputs={[
          {
            name: "name",
            type: "text",
            placeholder: "Your Full Name",
            required: true,
          },
          {
            name: "email",
            type: "email",
            placeholder: "Email Address",
            required: true,
          },
          {
            name: "phone",
            type: "tel",
            placeholder: "Phone Number (Optional)",
            required: false,
          },
        ]}
        textarea={{
          name: "message",
          placeholder: "Tell us about your project requirements or questions...",
          required: true,
          rows: 4,
        }}
        buttonText="Send Inquiry"
        showConsentCheckbox={true}
        consentText="I provide express consent to receive commercial electronic messages (including project quotes, news, and updates) from TylerBuilds in accordance with Canada's Anti-Spam Legislation (CASL). I understand I can withdraw my consent at any time."
        consentRequired={true}
        businessNotice="TylerBuilds • Edmonton, AB, Canada • hamiltontyler10@gmail.com • (289) 209-5888"
        imageSrc="http://img.b2bpic.net/free-photo/analysis-strategy-study-information-business-planning_53876-133682.jpg?_wi=2"
        textAnimation="slide-up"
      />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
