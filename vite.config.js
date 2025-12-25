// vite.config.js - local development uchun
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
    proxy: {
      "/users": {
        target: "https://api.e-kundalikfu.uz",
        changeOrigin: true,
        secure: false,
      },
      "/university": {
        target: "https://api.e-kundalikfu.uz",
        changeOrigin: true,
        secure: false,
      },
      "/practice": {
        target: "https://api.e-kundalikfu.uz",
        changeOrigin: true,
        secure: false,
      },
      "/media": {
        target: "https://api.e-kundalikfu.uz",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // Build sozlamalari
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
