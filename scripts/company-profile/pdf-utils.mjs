import { COLORS } from "./config.mjs";

export function pageMargin() {
  return 48;
}

export function addHeader(doc, title, subtitle) {
  const margin = pageMargin();
  doc.save();
  doc.rect(0, 0, doc.page.width, doc.page.height).fill("#FFFFFF");
  doc.rect(0, 0, doc.page.width, 18).fill(COLORS.navy);
  doc.roundedRect(margin, margin - 8, 28, 4, 2).fill(COLORS.green);
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
  const { indent = 12, bullet = "-", gap = 6, width } = options;
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

export function drawPill(doc, text, x, y, options = {}) {
  const {
    width = doc.widthOfString(text) + 22,
    fill = "#EEF4FF",
    color = COLORS.blue,
  } = options;

  doc.roundedRect(x, y, width, 24, 12).fill(fill);
  doc
    .fillColor(color)
    .font("Helvetica-Bold")
    .fontSize(8.8)
    .text(text, x + 11, y + 7, { width: width - 22, align: "center" });
}

export function addPageFooter(doc, pageNumber, totalPages) {
  const margin = pageMargin();
  const y = doc.page.height - 42;

  doc.save();
  doc
    .moveTo(margin, y - 10)
    .lineTo(doc.page.width - margin, y - 10)
    .strokeColor("#E3E7EF")
    .lineWidth(0.8)
    .stroke();

  doc
    .fillColor(COLORS.muted)
    .font("Helvetica")
    .fontSize(8)
    .text("Kanato Engineering Resources Nig. Ltd.", margin, y, {
      width: 260,
    });

  doc
    .fillColor(COLORS.blue)
    .font("Helvetica-Bold")
    .fontSize(8)
    .text(`${pageNumber} / ${totalPages}`, doc.page.width - margin - 60, y, {
      width: 60,
      align: "right",
    });
  doc.restore();
}
