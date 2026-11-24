import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  assetsInclude: ["**/*.riv"], // ✅ .riv fayllarini tanish uchun qo'shildi
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
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["styled-components"],
        },
      },
    },
  },
});
