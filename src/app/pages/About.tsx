import { SEO } from "../components/SEO";
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
        title="About Us — 33+ Years of Indigenous Engineering Excellence"
        description="Learn about Kanato Engineering Resources Nig. Ltd. — incorporated in 1991, RC 666713. A wholly indigenous Nigerian engineering company built on integrity, professionalism, and 33+ years of experience."
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Kanato Engineering Resources Nig. Ltd.",
          url: "https://www.kanato-engineering.com/about",
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
