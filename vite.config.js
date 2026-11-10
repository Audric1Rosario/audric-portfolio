import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Portfolio designed & built by Audric Rosario
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/audric-portfolio/",
  build: {
    rollupOptions: {
      output: {
        // Vendor code changes rarely: separate chunks stay cached between content updates.
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
        },
      },
    },
  },
});
