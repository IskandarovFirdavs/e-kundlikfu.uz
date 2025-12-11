// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "^/university/.*": {
        target: "https://4444fdcee6c0.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
      "^/practice/.*": {
        target: "https://4444fdcee6c0.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
      "^/users/.*": {
        target: "https://4444fdcee6c0.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
