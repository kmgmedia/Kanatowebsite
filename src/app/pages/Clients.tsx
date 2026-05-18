import { PageCTA } from "../components/marketing/PageCTA";
import { PageHero } from "../components/marketing/PageHero";
import { SEO } from "../components/SEO";
import { PAGE_METADATA } from "../seo/pageMetadata";
import { ClientsWallSection } from "./_clientsComponents/ClientsWallSection";
import { SectorsSection } from "./_clientsComponents/SectorsSection";
import { StatsSection } from "./_clientsComponents/StatsSection";
import { clientsHeroImage } from "./_clientsComponents/data";

export function Clients() {
  return (
    <div>
      <SEO
        title={PAGE_METADATA.clients.title}
        description={PAGE_METADATA.clients.description}
        path={PAGE_METADATA.clients.path}
      />

      <PageHero
        backgroundImage={clientsHeroImage}
        badge="Our Clients"
        currentPage="Clients"
        title={
          <>
            Trusted by Organizations &{" "}
            <span className="text-primary">
              Institutions Across Nigeria
            </span>
          </>
        }
        description="Our client portfolio spans over three decades and includes leading corporations, financial institutions, telecom companies, government agencies, and private developers."
      />

      <StatsSection />
      <SectorsSection />
      <ClientsWallSection />

      <PageCTA
        title="Join Our Growing List of Satisfied Clients"
        description="Partner with Kanato Engineering for your next project and experience the difference that professionalism, integrity, and experience makes."
        primaryAction={{ href: "/request-quote", label: "Request a Quote" }}
        secondaryAction={{ href: "/contact", label: "Contact Us" }}
      />
    </div>
  );
}
