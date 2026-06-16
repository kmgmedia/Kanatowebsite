import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { COMPANY_PROFILE, PROJECTS } from "./data.mjs";
import { aboutImagePath, imagesDir, logoPath } from "./config.mjs";

export function loadBuffer(filePath) {
  return fs.readFile(filePath);
}

export async function saveBuffer(filePath, buffer) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  return fs.writeFile(filePath, buffer);
}

export async function loadRemoteImage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${url}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function ensureLocalAssets() {
  await fs.mkdir(imagesDir, { recursive: true });

  for (let index = 0; index < COMPANY_PROFILE.heroImages.length; index += 1) {
    try {
      const localRel = COMPANY_PROFILE.heroImages[index];
      const localPath = path.resolve(localRel);

      try {
        await fs.access(localPath);
        continue;
      } catch {}

      const fallback = PROJECTS[index]?.image;
      if (fallback && /^https?:\/\//.test(fallback)) {
        const buffer = await loadRemoteImage(fallback);
        await saveBuffer(localPath, buffer);
        console.log(`Saved hero image ${localRel} from ${fallback}`);
      }
    } catch (error) {
      console.warn("Failed to ensure hero image:", error);
    }
  }

  const serviceImageFiles =
    COMPANY_PROFILE.services.map((service) => service.image).filter(Boolean);

  for (const fileReference of serviceImageFiles) {
    try {
      if (!/^https?:\/\//.test(fileReference)) {
        continue;
      }

      const fileName = path.basename(fileReference.split("?")[0]);
      const localPath = path.join(imagesDir, fileName);

      try {
        await fs.access(localPath);
        continue;
      } catch {}

      const buffer = await loadRemoteImage(fileReference);
      await saveBuffer(localPath, buffer);
      console.log(`Saved service image ${localPath}`);
    } catch {}
  }
}

export async function optimizeImage(filePath, maxWidth = 1600, quality = 80) {
  try {
    const buffer = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const image = sharp(buffer).rotate().resize({
      width: maxWidth,
      withoutEnlargement: true,
    });

    const output =
      extension === ".png"
        ? await image.png({ quality, compressionLevel: 9 }).toBuffer()
        : await image.jpeg({ quality, mozjpeg: true }).toBuffer();

    await fs.writeFile(filePath, output);
    console.log(`Optimized ${filePath}`);
  } catch (error) {
    console.warn(`Failed to optimize ${filePath}:`, error?.message || error);
  }
}

export async function optimizeImageBuffer(buffer, maxWidth = 1200, quality = 76) {
  try {
    return await sharp(buffer)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
  } catch {
    return buffer;
  }
}

export async function optimizeLocalAssets() {
  await ensureLocalAssets();

  try {
    const entries = await fs.readdir(imagesDir);
    for (const name of entries) {
      await optimizeImage(path.join(imagesDir, name), 1400, 78);
    }
  } catch (error) {
    console.warn(
      "No images to optimize or optimization failed:",
      error?.message || error,
    );
  }

  await Promise.all([
    optimizeImage(logoPath, 800, 80),
    optimizeImage(aboutImagePath, 1200, 78),
  ]).catch(() => {});
}

export async function loadProjectImages(projects) {
  return Promise.all(
    projects.map(async (project) => {
      const source = project.image;

      if (
        typeof source === "string" &&
        (/^\.\/public|^public|^\//.test(source) ||
          source.startsWith("./public") ||
          source.startsWith("public/"))
      ) {
        return loadBuffer(path.resolve(source.replace(/^\.\//, "")));
      }

      if (typeof source === "string" && /^https?:\/\//.test(source)) {
        const buffer = await loadRemoteImage(source);
        return optimizeImageBuffer(buffer, 1100, 74);
      }

      try {
        const buffer = await loadBuffer(source);
        return optimizeImageBuffer(buffer, 1100, 74);
      } catch {
        const buffer = await loadRemoteImage(String(source));
        return optimizeImageBuffer(buffer, 1100, 74);
      }
    }),
  );
}
