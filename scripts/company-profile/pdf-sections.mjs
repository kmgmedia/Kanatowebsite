import { COLORS } from "./config.mjs";
import { CLIENTS, COMPANY, PROJECTS, SERVICES } from "./data.mjs";
import { addHeader, drawLabelValue, drawPill } from "./pdf-utils.mjs";

function drawStatCard(doc, label, value, x, y, width = 116) {
  doc.roundedRect(x, y, width, 68, 14).fill("#FFFFFF");
  doc
    .fillColor(COLORS.green)
    .font("Helvetica-Bold")
    .fontSize(8.5)
    .text(label.toUpperCase(), x + 12, y + 14, { width: width - 24 });
  doc
    .fillColor(COLORS.navy)
    .font("Helvetica-Bold")
    .fontSize(12)
    .text(value, x + 12, y + 32, { width: width - 24, lineGap: 2 });
}

function drawSoftCard(doc, x, y, width, height) {
  doc.roundedRect(x + 2, y + 3, width, height, 14).fill("#E8ECF7");
  doc.roundedRect(x, y, width, height, 14).fillAndStroke("#FFFFFF", "#E3E7EF");
}

export function renderCoverPage(doc, { logo, coverImage }) {
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(COLORS.navy);
  doc.rect(0, 0, doc.page.width, 92).fill(COLORS.blue);
  doc.rect(0, 686, doc.page.width, 156).fill("#17244F");

  doc.roundedRect(334, 72, 184, 514, 24).fill("#FFFFFF");
  doc.save();
  doc.roundedRect(344, 82, 164, 494, 18).clip();
  doc.image(coverImage, 344, 82, { fit: [164, 494], align: "center", valign: "center" });
  doc.restore();

  doc.image(logo, 48, 42, { fit: [96, 96] });
  drawPill(doc, "Corporate Profile", 48, 154, {
    width: 132,
    fill: "#EAF1FF",
    color: COLORS.blue,
  });

  doc
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .fontSize(31)
    .text("Welcome to", 48, 198, { width: 250, lineGap: 2 });
  doc
    .font("Helvetica-Bold")
    .fontSize(29)
    .text(COMPANY.shortName, 48, 236, { width: 260, lineGap: 3 });

  doc
    .moveTo(48, 319)
    .lineTo(182, 319)
    .strokeColor(COLORS.green)
    .lineWidth(3)
    .stroke();

  doc
    .font("Helvetica")
    .fontSize(10.8)
    .fillColor("#ECF2FF")
    .text(
      "A dependable Nigerian engineering partner for civil works, electrical installations, mechanical services, telecom infrastructure, and power projects.",
      48,
      344,
      {
        width: 250,
        lineGap: 5,
      },
    );

  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor("#FFFFFF")
    .text("Prepared for clients, partners, and stakeholders", 48, 438, {
      width: 250,
      lineGap: 4,
    });

  drawStatCard(doc, "Founded", COMPANY.founded, 48, 514, 112);
  drawStatCard(doc, "Registration", COMPANY.rc, 174, 514, 112);
  drawStatCard(doc, "Reach", "Nationwide", 300, 618, 112);

  doc
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .fontSize(10)
    .text("Civil  |  Electrical  |  Mechanical  |  Telecom  |  Power", 48, 708);
  doc
    .fillColor("#D7E2FF")
    .font("Helvetica")
    .fontSize(9)
    .text(`${COMPANY.phone}\n${COMPANY.email}`, 48, 730, {
      width: 430,
      lineGap: 4,
    });
}

export function renderCompanyOverviewPage(doc, aboutImage) {
  doc.addPage();
  addHeader(doc, "Company Overview", "Who we are and what we deliver");

  doc.roundedRect(48, 104, 246, 226, 16).fill("#F7FAFF");
  doc
    .fillColor(COLORS.text)
    .font("Helvetica")
    .fontSize(10.5)
    .text(
      "Kanato Engineering Resources Nigeria Limited was incorporated on 23rd July 1991 as a distinct engineering company. We specialize in Electrical, Mechanical, and Civil engineering services, and have built a track record of dependable delivery across Nigeria.",
      66,
      124,
      { width: 210, lineGap: 4 },
    );
  doc.moveDown(0.8);
  doc.text(
    "As a wholly indigenous engineering company, we engage in electrical and mechanical installation, sales, supply, construction, and service/maintenance. Our experienced professionals translate designs into affordable, reliable reality while keeping safety and aesthetics in view.",
    66,
    doc.y,
    { width: 210, lineGap: 4 },
  );
  doc.moveDown(0.8);
  doc.text(
    "Our professionalism, integrity, and broad field experience have helped us serve nearly all states in Nigeria and build long-standing relationships with construction companies, financiers, suppliers, and distributors of electrical materials.",
    66,
    doc.y,
    { width: 210, lineGap: 4 },
  );

  doc.roundedRect(316, 104, 190, 226, 16).fill("#E5E7EB");
  doc.save();
  doc.roundedRect(316, 104, 190, 226, 16).clip();
  doc.image(aboutImage, 316, 104, { fit: [190, 226], align: "center", valign: "center" });
  doc.restore();

  doc
    .fillColor(COLORS.blue)
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("Why clients work with us", 48, 372);

  const highlights = [
    ["Experienced team", "Hands-on technical professionals across civil, electrical, mechanical, telecom, and power works."],
    ["Reliable delivery", "Project execution focused on safety, quality, cost control, and practical field realities."],
    ["Trusted network", "Relationships with construction firms, financiers, suppliers, utilities, and distributors."],
    ["Nigeria-wide reach", "Project support and engineering delivery experience across multiple states."],
  ];

  highlights.forEach((item, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const x = 48 + column * 250;
    const y = 404 + row * 96;

    drawSoftCard(doc, x, y, 222, 76);
    doc
      .fillColor(COLORS.green)
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .text(item[0], x + 14, y + 14, { width: 190 });
    doc
      .fillColor(COLORS.muted)
      .font("Helvetica")
      .fontSize(8.8)
      .text(item[1], x + 14, y + 32, { width: 190, lineGap: 2 });
  });

  doc.roundedRect(48, 620, 450, 72, 14).fill("#F3F6FF");
  drawLabelValue(doc, "Founded", COMPANY.founded, 66, 640, 88);
  drawLabelValue(doc, "RC", COMPANY.rc, 170, 640, 88);
  drawLabelValue(doc, "Reach", "Nationwide", 274, 640, 88);
  drawLabelValue(doc, "Status", "Wholly indigenous", 378, 640, 100);
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
      bodyColor: "#E9F0FF",
    },
  ];

  cards.forEach((card, index) => {
    const x = 48 + index * 250;
    drawSoftCard(doc, x, 108, 222, 210);
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

  doc.fillColor(COLORS.blue).font("Helvetica-Bold").fontSize(14).text("Core Values", 48, 356);
  const values = ["Integrity", "Professionalism", "Quality", "Safety", "Reliability", "Client Commitment"];
  values.forEach((value, index) => {
    const x = 48 + (index % 3) * 156;
    const y = 392 + Math.floor(index / 3) * 48;
    drawPill(doc, value, x, y, { width: 132, fill: "#F3F6FF", color: COLORS.navy });
  });

  doc.roundedRect(48, 530, 450, 106, 16).fill(COLORS.navy);
  doc
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .fontSize(14)
    .text("Our commitment", 70, 554);
  doc
    .fillColor("#D7E2FF")
    .font("Helvetica")
    .fontSize(10)
    .text(
      "Every assignment is approached with practical engineering judgment, transparent communication, and a clear respect for the client's time, budget, and operational needs.",
      70,
      580,
      { width: 400, lineGap: 4 },
    );
}

export function renderServicesPage(doc) {
  doc.addPage();
  addHeader(doc, "Services", "What we do for our clients");

  SERVICES.forEach((service, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const x = 48 + column * 252;
    const y = 106 + row * 116;

    doc.roundedRect(x, y, 228, 98, 14).fillAndStroke("#FFFFFF", "#E5E7EB");
    doc.roundedRect(x + 14, y + 12, 200, 22, 8).fill(COLORS.light);
    doc
      .fillColor(COLORS.blue)
      .font("Helvetica-Bold")
      .fontSize(10.2)
      .text(service.title, x + 22, y + 18, { width: 180 });
    doc
      .fillColor(COLORS.text)
      .font("Helvetica")
      .fontSize(8.4)
      .text(service.points.join("  |  "), x + 14, y + 44, {
        width: 198,
        lineGap: 3,
      });
  });

  doc.roundedRect(48, 584, 450, 74, 16).fill("#F3F6FF");
  doc
    .fillColor(COLORS.green)
    .font("Helvetica-Bold")
    .fontSize(10)
    .text("Client-ready delivery", 70, 606);
  doc
    .fillColor(COLORS.muted)
    .font("Helvetica")
    .fontSize(9.5)
    .text(
      "From assessment and procurement to site execution and handover, Kanato supports clients with practical engineering service built around reliable outcomes.",
      70,
      626,
      { width: 396, lineGap: 3 },
    );
}

export function renderProjectsPage(doc, projectImages) {
  doc.addPage();
  addHeader(doc, "Selected Projects", "A visual snapshot of recent project references");

  PROJECTS.forEach((project, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const x = 48 + column * 250;
    const y = 108 + row * 236;
    const image = projectImages[index];

    drawSoftCard(doc, x, y, 224, 204);
    doc.roundedRect(x, y, 224, 112, 14).fill("#E5E7EB");
    doc.save();
    doc.roundedRect(x, y, 224, 112, 14).clip();
    doc.image(image, x, y, { fit: [224, 112], align: "center", valign: "center" });
    doc.restore();

    doc
      .fillColor(COLORS.blue)
      .font("Helvetica-Bold")
      .fontSize(10.5)
      .text(project.title, x + 14, y + 130, { width: 190, lineGap: 2 });
    doc
      .fillColor(COLORS.text)
      .font("Helvetica")
      .fontSize(9)
      .text(project.client, x + 14, y + 160, {
        width: 190,
      });
    drawPill(doc, project.category, x + 14, y + 178, {
      width: 104,
      fill: "#EEF8F1",
      color: COLORS.green,
    });
  });

  doc.roundedRect(48, 610, 450, 62, 16).fill(COLORS.navy);
  doc
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("Project work shown here is a sample of Kanato's broader delivery experience.", 70, 632, {
      width: 400,
      lineGap: 3,
    });
  doc
    .fillColor("#D7E2FF")
    .font("Helvetica")
    .fontSize(9)
    .text("Additional references can be discussed based on project type and client requirements.", 70, 654, {
      width: 400,
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
      "Our client portfolio spans over three decades and includes leading corporations, financial institutions, telecom companies, government agencies, utility providers, and private developers.",
      48,
      106,
      { width: 450, lineGap: 4 },
    );

  const sectors = [
    "Banking & Finance",
    "Telecom",
    "Power & Energy",
    "Government",
    "Construction",
  ];

  sectors.forEach((sector, index) => {
    drawPill(doc, sector, 48 + (index % 3) * 152, 164 + Math.floor(index / 3) * 38, {
      width: 132,
      fill: index === 2 ? "#EEF8F1" : "#F3F6FF",
      color: index === 2 ? COLORS.green : COLORS.blue,
    });
  });

  const clientColumns = 2;
  const clientColumnWidth = 218;

  CLIENTS.forEach((client, index) => {
    const column = index % clientColumns;
    const row = Math.floor(index / clientColumns);
    const x = 48 + column * 238;
    const y = 254 + row * 38;

    doc.roundedRect(x, y, clientColumnWidth, 28, 8).fillAndStroke("#FFFFFF", "#E5E7EB");
    doc.circle(x + 14, y + 14, 3.2).fill(COLORS.green);
    doc
      .fillColor(COLORS.muted)
      .font("Helvetica")
      .fontSize(9.2)
      .text(client, x + 26, y + 9, { width: 180 });
  });
}

export function renderContactPage(doc) {
  doc.addPage();
  addHeader(doc, "Let's Work Together", "How to reach Kanato Engineering");

  doc.roundedRect(48, 106, 450, 122, 18).fill(COLORS.navy);
  doc
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .fontSize(19)
    .text("Thank you for considering Kanato Engineering.", 72, 132, {
      width: 390,
    });
  doc
    .fillColor("#D7E2FF")
    .font("Helvetica")
    .fontSize(10)
    .text(
      "We welcome the opportunity to support your next civil, electrical, mechanical, telecom, or power project with dependable field execution and professional service.",
      72,
      170,
      { width: 390, lineGap: 4 },
    );

  const contactY = 268;
  const contactRows = [
    ["Head Office", COMPANY.headOffice],
    ["Branch Office", COMPANY.branchOffice],
    ["Phone", COMPANY.phone],
    ["Email", COMPANY.email],
    ["Website", "www.kanato-engineering.com"],
  ];

  contactRows.forEach((row, index) => {
    const y = contactY + index * 50;
    doc.roundedRect(48, y, 450, 38, 12).fillAndStroke("#FFFFFF", "#E5E7EB");
    doc
      .fillColor(COLORS.green)
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .text(row[0].toUpperCase(), 66, y + 10, { width: 86 });
    doc
      .fillColor(COLORS.text)
      .font("Helvetica")
      .fontSize(10)
      .text(row[1], 166, y + 10, { width: 300, lineGap: 2 });
  });

  doc.roundedRect(48, 552, 450, 78, 16).fill("#F3F6FF");
  doc
    .fillColor(COLORS.blue)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("Recommended next step", 70, 576);
  doc
    .fillColor(COLORS.muted)
    .font("Helvetica")
    .fontSize(9.5)
    .text(
      "Share your project scope, site location, and target timeline. Our team can review the requirement and advise on the practical path to delivery.",
      70,
      598,
      { width: 400, lineGap: 4 },
    );

  drawPill(doc, "Civil", 48, 674, { width: 78, fill: "#EEF8F1", color: COLORS.green });
  drawPill(doc, "Electrical", 136, 674, { width: 98, fill: "#EEF4FF", color: COLORS.blue });
  drawPill(doc, "Mechanical", 244, 674, { width: 104, fill: "#EEF4FF", color: COLORS.blue });
  drawPill(doc, "Power", 358, 674, { width: 78, fill: "#EEF8F1", color: COLORS.green });
}
