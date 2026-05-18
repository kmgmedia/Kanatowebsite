import { SEO } from "../components/SEO";
import { PAGE_METADATA } from "../seo/pageMetadata";
import { HeroSection } from "./_aboutComponents/HeroSection";
import { CompanyOverview } from "./_aboutComponents/CompanyOverview";
import { VisionMission } from "./_aboutComponents/VisionMission";
import { CoreValues } from "./_aboutComponents/CoreValues";
import { Milestones } from "./_aboutComponents/Milestones";
import { FinalCTA } from "./_aboutComponents/FinalCTA";

export function About() {
  return (
    <div>
      <SEO
        title={PAGE_METADATA.about.title}
        description={PAGE_METADATA.about.description}
        path={PAGE_METADATA.about.path}
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Kanato Engineering Resources Nig. Ltd.",
          url: "http://kanatoengineering.com.ng/about",
          description:
            "Kanato Engineering Resources Nigeria Limited was incorporated on 23rd July 1991. We specialise in Electrical, Mechanical, and Civil engineering services across Nigeria.",
        }}
      />
      <HeroSection />
      <CompanyOverview />
      <VisionMission />
      <CoreValues />
      <Milestones />
      <FinalCTA />
    </div>
  );
}
