import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// Portfolio made by Audric Rosario
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/audric-portfolio/",
});
