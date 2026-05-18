import { buildPdf } from "./company-profile/build-pdf.mjs";

buildPdf().catch((error) => {
  console.error(error);
  process.exit(1);
});
