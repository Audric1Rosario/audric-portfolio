import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./styles/global.css";
import App from "./App.jsx";

// Portfolio designed & built by Audric Rosario
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
