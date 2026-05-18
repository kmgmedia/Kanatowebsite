import { COLORS } from "./config.mjs";
import { CLIENTS, COMPANY, PROJECTS, SERVICES } from "./data.mjs";
import { addBulletList, addHeader, drawLabelValue } from "./pdf-utils.mjs";

export function renderCoverPage(doc, { logo, coverImage }) {
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(COLORS.navy);
  doc.save();
  doc.rect(0, 0, doc.page.width, doc.page.height).fillOpacity(0.12).fill(COLORS.blue);
  doc.restore();

  doc.image(logo, 48, 44, { fit: [110, 110] });
  doc
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .fontSize(30)
    .text(COMPANY.shortName, 48, 170, { width: 300, lineGap: 4 });

  doc
    .font("Helvetica-Bold")
    .fontSize(15)
    .fillColor("#D7E2FF")
    .text("Corporate Profile", 48, 212);

  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor("#ECF2FF")
    .text(COMPANY.description, 48, 244, {
      width: 320,
      lineGap: 4,
    });

  const coverStatsX = 48;
  const coverStatsY = 332;
  const statWidth = 94;
  const statGap = 12;
  const stats = [
    ["Founded", COMPANY.founded],
    ["RC", COMPANY.rc],
    ["Scope", "Civil / Electrical / Mechanical"],
  ];

  stats.forEach((stat, index) => {
    const x = coverStatsX + index * (statWidth + statGap);
    doc.roundedRect(x, coverStatsY, statWidth, 62, 10).fillAndStroke(
      "#FFFFFF",
      "rgba(255,255,255,0.16)",
    );
    doc
      .fillColor(COLORS.blue)
      .font("Helvetica-Bold")
      .fontSize(8)
      .text(stat[0], x + 10, coverStatsY + 12, {
        width: statWidth - 20,
        align: "center",
      });
    doc
      .fillColor(COLORS.navy)
      .font("Helvetica-Bold")
      .fontSize(index === 2 ? 8 : 10)
      .text(stat[1], x + 10, coverStatsY + 26, {
        width: statWidth - 20,
        align: "center",
      });
  });

  doc.roundedRect(386, 48, 160, 470, 16).fill("#FFFFFF");
  doc.save();
  doc.roundedRect(396, 58, 140, 450, 12).clip();
  doc.image(coverImage, 396, 58, { fit: [140, 450] });
  doc.restore();

  doc
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .fontSize(12)
    .text("Prepared for partners, clients, and stakeholders", 48, 420, {
      width: 300,
    });
  doc
    .fillColor("#D7E2FF")
    .font("Helvetica")
    .fontSize(9)
    .text(`${COMPANY.headOffice}\n${COMPANY.phone}\n${COMPANY.email}`, 48, 442, {
      width: 300,
      lineGap: 4,
    });
}

export function renderCompanyOverviewPage(doc, aboutImage) {
  doc.addPage();
  addHeader(doc, "Company Overview", "Who we are and what we deliver");

  doc
    .fillColor(COLORS.text)
    .font("Helvetica")
    .fontSize(10.5)
    .text(
      "Kanato Engineering Resources Nigeria Limited was incorporated on 23rd July 1991 as a distinct engineering company. We specialize in Electrical, Mechanical, and Civil engineering services, and have built a track record of dependable delivery across Nigeria.",
      48,
      106,
      { width: 240, lineGap: 4 },
    );
  doc.moveDown(0.8);
  doc.text(
    "As a wholly indigenous engineering company, we engage in electrical and mechanical installation, sales, supply, construction, and service/maintenance. Our experienced professionals translate designs into affordable, reliable reality while keeping safety and aesthetics in view.",
    48,
    doc.y,
    { width: 240, lineGap: 4 },
  );
  doc.moveDown(0.8);
  doc.text(
    "Our professionalism, integrity, and broad field experience have helped us serve nearly all states in Nigeria and build long-standing relationships with construction companies, financiers, suppliers, and distributors of electrical materials.",
    48,
    doc.y,
    { width: 240, lineGap: 4 },
  );

  doc.image(aboutImage, 312, 106, { fit: [190, 260], align: "center", valign: "center" });
  doc.roundedRect(312, 382, 190, 82, 12).fill("#F3F6FF");
  drawLabelValue(doc, "Founded", COMPANY.founded, 326, 398, 70);
  drawLabelValue(doc, "RC", COMPANY.rc, 400, 398, 85);
  drawLabelValue(doc, "Reach", "Nationwide", 326, 435, 85);
  drawLabelValue(doc, "Status", "Wholly indigenous", 400, 435, 85);
}

export function renderVisionMissionPage(doc) {
  doc.addPage();
  addHeader(doc, "Vision, Mission & Values", "The principles that shape our work");

  const cards = [
    {
      title: "Vision",
      fill: "#FFFFFF",
      border: "#D7DDEA",
      titleColor: COLORS.blue,
      body:
        "To provide excellent service of Electrical, Mechanical, and Civil Installation and Servicing through a professional team, becoming a trusted engineering partner recognized for efficient and reliable solutions across Nigeria and West Africa.",
    },
    {
      title: "Mission",
      fill: COLORS.blue,
      border: COLORS.blue,
      titleColor: "#FFFFFF",
      body:
        "To uphold integrity and professionalism in the daily discharge of our products and services, bringing client dreams to reality through quality workmanship, innovation, and unwavering commitment to excellence.",
      bodyColor: "rgba(255,255,255,0.78)",
    },
  ];

  cards.forEach((card, index) => {
    const x = 48 + index * 250;
    doc.roundedRect(x, 108, 222, 210, 16).fillAndStroke(card.fill, card.border);
    doc
      .fillColor(card.titleColor)
      .font("Helvetica-Bold")
      .fontSize(18)
      .text(card.title, x + 18, 126);
    doc
      .fillColor(card.bodyColor || COLORS.muted)
      .font("Helvetica")
      .fontSize(10.2)
      .text(card.body, x + 18, 154, {
        width: 186,
        lineGap: 4,
      });
  });

  doc.fillColor(COLORS.blue).font("Helvetica-Bold").fontSize(14).text("Core Values", 48, 344);
  addBulletList(doc, ["Integrity", "Professionalism", "Quality", "Safety", "Reliability", "Client Commitment"], {
    indent: 14,
    width: 430,
  });
}

export function renderServicesPage(doc) {
  doc.addPage();
  addHeader(doc, "Services", "What we do for our clients");

  SERVICES.forEach((service, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const x = 48 + column * 252;
    const y = 106 + row * 128;

    doc.roundedRect(x, y, 228, 112, 14).fillAndStroke("#FFFFFF", "#E5E7EB");
    doc.roundedRect(x + 14, y + 14, 200, 24, 8).fill(COLORS.light);
    doc
      .fillColor(COLORS.blue)
      .font("Helvetica-Bold")
      .fontSize(11)
      .text(service.title, x + 22, y + 21, { width: 180 });
    doc
      .fillColor(COLORS.text)
      .font("Helvetica")
      .fontSize(8.8)
      .text(service.points.join(" * "), x + 14, y + 48, {
        width: 198,
        lineGap: 3,
      });
  });
}

export function renderProjectsPage(doc, projectImages) {
  doc.addPage();
  addHeader(doc, "Selected Projects", "A visual snapshot of recent project references");

  PROJECTS.forEach((project, index) => {
    const y = 106 + index * 110;
    if (y > 660) {
      doc.addPage();
      addHeader(doc, "Selected Projects (continued)", "A visual snapshot of recent project references");
    }

    const currentY = doc.y;
    const image = projectImages[index];

    doc.roundedRect(48, currentY, 105, 78, 10).fill("#E5E7EB");
    doc.save();
    doc.roundedRect(48, currentY, 105, 78, 10).clip();
    doc.image(image, 48, currentY, { fit: [105, 78] });
    doc.restore();

    doc
      .fillColor(COLORS.blue)
      .font("Helvetica-Bold")
      .fontSize(11)
      .text(project.title, 166, currentY + 4, { width: 250 });
    doc
      .fillColor(COLORS.text)
      .font("Helvetica")
      .fontSize(9)
      .text(`${project.client}  *  ${project.category}`, 166, currentY + 22, {
        width: 250,
      });
    doc
      .fillColor(COLORS.muted)
      .fontSize(8.5)
      .text("Reference image from the website projects portfolio", 166, currentY + 40, {
        width: 250,
      });

    doc.y = currentY + 88;
  });
}

export function renderClientsPage(doc) {
  doc.addPage();
  addHeader(doc, "Clients", "Organizations we have served");
  doc
    .fillColor(COLORS.text)
    .font("Helvetica")
    .fontSize(10.5)
    .text(
      "Our client portfolio spans over three decades and includes leading corporations, financial institutions, telecom companies, government agencies, and private developers.",
      48,
      106,
      { width: 450, lineGap: 4 },
    );

  const clientColumns = 2;
  const clientColumnWidth = 230;

  CLIENTS.forEach((client, index) => {
    const column = index % clientColumns;
    const row = Math.floor(index / clientColumns);
    const x = 48 + column * 238;
    const y = 152 + row * 34;

    doc.roundedRect(x, y, clientColumnWidth, 24, 8).fillAndStroke("#F8FAFC", "#E5E7EB");
    doc
      .fillColor(COLORS.text)
      .font("Helvetica")
      .fontSize(9.2)
      .text(client, x + 10, y + 7, { width: 180 });
  });
}

export function renderContactPage(doc) {
  doc.addPage();
  addHeader(doc, "Contact", "How to reach us");

  doc
    .fillColor(COLORS.text)
    .font("Helvetica-Bold")
    .fontSize(14)
    .text("Kanato Engineering Resources Nig. Ltd.", 48, 108);
  doc
    .fillColor(COLORS.muted)
    .font("Helvetica")
    .fontSize(10.5)
    .text(COMPANY.description, 48, 132, { width: 240, lineGap: 4 });

  const contactY = 204;
  const contactRows = [
    ["Head Office", COMPANY.headOffice],
    ["Branch Office", COMPANY.branchOffice],
    ["Phone", COMPANY.phone],
    ["Email", COMPANY.email],
    ["Website", "www.kanato-engineering.com"],
  ];

  contactRows.forEach((row, index) => {
    const y = contactY + index * 40;
    doc.roundedRect(48, y, 450, 30, 10).fillAndStroke("#F8FAFC", "#E5E7EB");
    doc
      .fillColor(COLORS.green)
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .text(row[0], 60, y + 7);
    doc
      .fillColor(COLORS.text)
      .font("Helvetica")
      .fontSize(10)
      .text(row[1], 150, y + 7, { width: 330 });
  });

  doc
    .fillColor(COLORS.blue)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("Thank you for considering Kanato Engineering.", 48, 430);
  doc
    .fillColor(COLORS.muted)
    .font("Helvetica")
    .fontSize(9.5)
    .text(
      "We welcome the opportunity to support your next civil, electrical, mechanical, telecom, or power project.",
      48,
      452,
      { width: 420, lineGap: 4 },
    );
}
