import { PageCTA } from "../components/marketing/PageCTA";
import { PageHero } from "../components/marketing/PageHero";
import { SEO } from "../components/SEO";
import { PAGE_METADATA } from "../seo/pageMetadata";
import { ProcessSection } from "./_servicesComponents/ProcessSection";
import { ServiceDetailsSection } from "./_servicesComponents/ServiceDetailsSection";
import { servicesHeroImage } from "./_servicesComponents/data";

export function Services() {
  return (
    <div>
      <SEO
        title={PAGE_METADATA.services.title}
        description={PAGE_METADATA.services.description}
        path={PAGE_METADATA.services.path}
      />

      <PageHero
        backgroundImage={servicesHeroImage}
        badge="Our Services"
        currentPage="Services"
        title={
          <>
            Integrated Engineering Services for{" "}
            <span className="text-primary">Every Project Scale</span>
          </>
        }
        description="We provide electrical, mechanical, civil, and infrastructure engineering services designed to support construction, power, maintenance, and technical project delivery across Nigeria."
      />

      <ProcessSection />
      <ServiceDetailsSection />

      <PageCTA
        title="Ready to Get Started on Your Engineering Project?"
        description="Contact our team today for a professional consultation and project quote."
        primaryAction={{ href: "/request-quote", label: "Request a Quote" }}
        secondaryAction={{ href: "/contact", label: "Contact Us" }}
      />
    </div>
  );
}
