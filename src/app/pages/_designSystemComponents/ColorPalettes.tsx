import { PaletteColumn, SectionHeader, Divider } from "./helpers";
import { primaryColors, secondaryColors, textColors, neutralColors, feedbackColors, errorColors } from "./data";

export function ColorPalettes() {
  return (
    <>
      <SectionHeader
        label="Foundation"
        title="Color Palettes"
        desc="Full 10-shade palettes for every color category used in the design system."
      />

      <div className="overflow-x-auto pb-4">
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(6, minmax(180px, 1fr))", minWidth: "1100px" }}>
          <PaletteColumn title="Primary-color" colors={primaryColors} />
          <PaletteColumn title="Secondery-color" colors={secondaryColors} />
          <PaletteColumn title="Text-color" colors={textColors} />
          <PaletteColumn title="Neutral-color" colors={neutralColors} />
          <PaletteColumn title="Feedback-color" colors={feedbackColors} />
          <PaletteColumn title="Error-color" colors={errorColors} />
        </div>
      </div>

      <Divider />
    </>
  );
}


