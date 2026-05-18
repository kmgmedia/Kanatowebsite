import { COLORS } from "./config.mjs";

export function pageMargin() {
  return 48;
}

export function addHeader(doc, title, subtitle) {
  const margin = pageMargin();
  doc.save();
  doc.fillColor(COLORS.blue).fontSize(20).font("Helvetica-Bold").text(title, margin, margin);

  if (subtitle) {
    doc
      .fillColor(COLORS.muted)
      .fontSize(10)
      .font("Helvetica")
      .text(subtitle, margin, margin + 26);
  }

  doc
    .moveTo(margin, margin + 46)
    .lineTo(doc.page.width - margin, margin + 46)
    .strokeColor("#D6DAE4")
    .stroke();

  doc.restore();
  doc.y = margin + 60;
}

export function addBulletList(doc, items, options = {}) {
  const { indent = 12, bullet = "*", gap = 6, width } = options;
  const startX = doc.x;
  const textWidth = width || doc.page.width - startX - pageMargin();

  items.forEach((item) => {
    const y = doc.y;

    doc
      .fillColor(COLORS.green)
      .fontSize(12)
      .font("Helvetica-Bold")
      .text(bullet, startX, y, { width: indent });

    doc
      .fillColor(COLORS.text)
      .fontSize(10.2)
      .font("Helvetica")
      .text(item, startX + indent, y, {
        width: textWidth - indent,
        lineGap: 2,
      });

    doc.y = Math.max(doc.y, y + 18);
    doc.moveDown(gap / 12);
  });
}

export function drawLabelValue(doc, label, value, x, y, width) {
  doc
    .fillColor(COLORS.green)
    .font("Helvetica-Bold")
    .fontSize(8.5)
    .text(label, x, y, { width });

  doc
    .fillColor(COLORS.text)
    .font("Helvetica")
    .fontSize(10)
    .text(value, x, y + 12, { width });
}
