import fs from "node:fs/promises";
import PDFDocument from "pdfkit";
import { aboutImagePath, logoPath, outputPath } from "./config.mjs";
import { loadBuffer, loadProjectImages, optimizeLocalAssets } from "./assets.mjs";
import { COMPANY, PROJECTS } from "./data.mjs";
import { addPageFooter } from "./pdf-utils.mjs";
import {
  renderClientsPage,
  renderCompanyOverviewPage,
  renderContactPage,
  renderCoverPage,
  renderProjectsPage,
  renderServicesPage,
  renderVisionMissionPage,
} from "./pdf-sections.mjs";

export async function buildPdf() {
  const doc = new PDFDocument({
    size: "A4",
    margin: 48,
    info: {
      Title: `${COMPANY.shortName} Corporate Profile`,
      Author: COMPANY.name,
      Subject: "Corporate profile and services overview",
      Keywords: "Kanato Engineering, corporate profile, engineering services",
    },
    bufferPages: true,
  });

  const stream = await fs.open(outputPath, "w");
  const writeStream = stream.createWriteStream();
  doc.pipe(writeStream);

  const logo = await loadBuffer(logoPath);
  const aboutImage = await loadBuffer(aboutImagePath);

  await optimizeLocalAssets();

  const projectImages = await loadProjectImages(PROJECTS);

  renderCoverPage(doc, { logo, coverImage: projectImages[0] });
  renderCompanyOverviewPage(doc, aboutImage);
  renderVisionMissionPage(doc);
  renderServicesPage(doc);
  renderProjectsPage(doc, projectImages);
  renderClientsPage(doc);
  renderContactPage(doc);

  const pageRange = doc.bufferedPageRange();
  for (
    let pageIndex = pageRange.start + 1;
    pageIndex < pageRange.start + pageRange.count;
    pageIndex += 1
  ) {
    doc.switchToPage(pageIndex);
    addPageFooter(doc, pageIndex + 1, pageRange.count);
  }

  doc.end();

  await new Promise((resolve, reject) => {
    writeStream.on("finish", resolve);
    writeStream.on("error", reject);
  });

  await stream.close();
  console.log(`Generated ${outputPath}`);
}
