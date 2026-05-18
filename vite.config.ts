import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function spaFallbackPlugin() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexFile = path.join(distDir, "index.html");
      const notFoundFile = path.join(distDir, "404.html");

      if (fs.existsSync(indexFile)) {
        fs.copyFileSync(indexFile, notFoundFile);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallbackPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (id.includes("@emailjs")) {
            return "email";
          }

          if (id.includes("lucide-react")) {
            return "icons";
          }
        },
      },
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
