import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/HIMANSHU-KUMAR-PORTFOLIO/",
  build: {
    outDir: "docs",
    assetsDir: "",
  },
});
