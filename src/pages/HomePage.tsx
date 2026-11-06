import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
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
          imageSrc: "http://img.b2bpic.net/free-photo/analysis-strategy-study-information-business-planning_53876-133682.jpg",
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

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Testimonials"
      title="Happy Clients"
      description="Hear what our partners have to say."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "CEO, FashionBrand",
          quote: "Tyler delivered an incredible e-commerce site for my brand. Sales doubled immediately.",
          imageSrc: "http://img.b2bpic.net/free-photo/african-man-black-suit_1157-46903.jpg",
        },
        {
          name: "Mark Chen",
          role: "Founder, TechStart",
          quote: "The development speed and quality of work are unmatched. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-indoors_23-2149915936.jpg",
        },
        {
          name: "Elena Rodriguez",
          role: "Creative Lead",
          quote: "Finally found a partner who understands design aesthetics as much as the code.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-outdoors_23-2149915911.jpg",
        },
        {
          name: "David Smith",
          role: "Owner, Bistro",
          quote: "Simple, elegant, and effective. My restaurant booking increased significantly.",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-with-big-smile-crossed-arms_1139-248.jpg",
        },
        {
          name: "Jessica Lee",
          role: "Marketing Dir",
          quote: "Outstanding work! Professional and highly communicative.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-employee-with-glasses-paying-attention_1098-4084.jpg",
        },
      ]}
      textAnimation="fade-blur"
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
          <ContactCta
      tag="Contact"
      text="Ready to build something great? Get in touch today: 289-209-5888 or email hamiltontyler10@gmail.com"
      primaryButton={{
        text: "Email Tyler",
        href: "mailto:hamiltontyler10@gmail.com",
      }}
      secondaryButton={{
        text: "Call Now",
        href: "tel:2892095888",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
