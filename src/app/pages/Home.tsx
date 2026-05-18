import { SEO } from "../components/SEO";
import { PageCTA } from "../components/marketing/PageCTA";
import { HeroSection } from "./_homeComponents/HeroSection";
import { TrustBar } from "./_homeComponents/TrustBar";
import { AboutPreview } from "./_homeComponents/AboutPreview";
import { ServicesPreview } from "./_homeComponents/ServicesPreview";
import { WhyChoose } from "./_homeComponents/WhyChoose";
import { FeaturedProjects } from "./_homeComponents/FeaturedProjects";
import { Industries } from "./_homeComponents/Industries";
import { Clients } from "./_homeComponents/Clients";

export function Home() {
  return (
    <div>
      <SEO
        title="Reliable Electrical, Mechanical & Civil Engineering Services"
        description="Kanato Engineering Resources Nig. Ltd. - a wholly indigenous Nigerian engineering company since 1991, delivering electrical, mechanical, and civil engineering solutions across Nigeria. RC 666713."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Home - Kanato Engineering Resources Nig. Ltd.",
          url: "https://www.kanato-engineering.com",
          description:
            "Kanato Engineering Resources Nigeria Limited provides dependable electrical, mechanical, and civil engineering services across Nigeria since 1991.",
        }}
      />

      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <WhyChoose />
      <FeaturedProjects />
      <Industries />
      <Clients />

      <PageCTA
        eyebrow="Get Started"
        title="Need a Trusted Engineering Partner for Your Next Project?"
        description="Let's discuss your project requirements and deliver the right engineering solution for your needs."
        primaryAction={{ href: "/request-quote", label: "Request a Quote" }}
        secondaryAction={{ href: "/contact", label: "Contact Us" }}
      />
    </div>
  );
}
