// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "^/university/.*": {
        target: "https://e6a778723d41.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
      "^/practice/.*": {
        target: "https://e6a778723d41.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
      "^/users/.*": {
        target: "https://e6a778723d41.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
