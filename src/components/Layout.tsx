import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Portfolio",
    "href": "#portfolio"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="TylerBuilds"
      ctaButton={{
        text: "Contact",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="TylerBuilds"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Web Design",
              href: "#services",
            },
            {
              label: "Development",
              href: "#services",
            },
            {
              label: "Consulting",
              href: "#contact",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Email",
              href: "mailto:hamiltontyler10@gmail.com",
            },
            {
              label: "Call",
              href: "tel:2892095888",
            },
          ],
        },
      ]}
      copyright="© 2024 TylerBuilds. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "/privacy",
        },
        {
          label: "Terms of Service",
          href: "/terms",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
