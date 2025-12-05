import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",          // ✔ FIXES ALL 404 ERRORS
  build: {
    outDir: "docs",    // GitHub Pages deploys from /docs
    assetsDir: "",   // <--- CRITICAL
  },
});
