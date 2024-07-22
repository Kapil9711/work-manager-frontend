import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  plugins: [react()],
  build: {
    outDir: "../../work-tracker-backend/backend/public/", // Change 'dist' to your desired output directory
    emptyOutDir: true,
  },
});
