import { SEO } from "../components/SEO";
import { ColorPalettes } from "./_designSystemComponents/ColorPalettes";
import { Typography } from "./_designSystemComponents/Typography";
import { ButtonsShowcase } from "./_designSystemComponents/ButtonsShowcase";
import { BadgesShowcase } from "./_designSystemComponents/BadgesShowcase";
import { CardsShowcase } from "./_designSystemComponents/CardsShowcase";
import { IconBoxesShowcase } from "./_designSystemComponents/IconBoxesShowcase";
import { FormElementsShowcase } from "./_designSystemComponents/FormElementsShowcase";
import { NavigationShowcase } from "./_designSystemComponents/NavigationShowcase";
import { SectionBackgroundsShowcase } from "./_designSystemComponents/SectionBackgroundsShowcase";

export function DesignSystem() {
  return (
    <div style={{ backgroundColor: "#F5F7FA", minHeight: "100vh" }}>
      <SEO
        title="Design System — Complete Style Guide"
        description="Kanato Engineering Style Guide. Complete color palettes, typography, components, and design specifications used across the website."
        path="/designsystem"
      />

      {/* PAGE HEADER */}
      <div style={{ backgroundColor: "#2C3F81", paddingTop: "100px", paddingBottom: "60px" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
            style={{ backgroundColor: "rgba(47,168,79,0.2)", border: "1px solid rgba(47,168,79,0.4)" }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#2FA84F",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Design System
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Kanato Engineering <span style={{ color: "#2FA84F" }}>Style Guide</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "560px",
              fontSize: "0.975rem",
            }}
          >
            All colors, typography, buttons, cards, badges, form elements, and UI patterns used across the Kanato Engineering
            website.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <ColorPalettes />
        <Typography />
        <ButtonsShowcase />
        <BadgesShowcase />
        <CardsShowcase />
        <IconBoxesShowcase />
        <FormElementsShowcase />
        <NavigationShowcase />
        <SectionBackgroundsShowcase />
      </div>
    </div>
  );
}


