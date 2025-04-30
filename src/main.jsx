import "./index.css";
import { StrictMode } from "react";
// React
import { createRoot } from "react-dom/client";
// React Router
import { HashRouter as Router, Routes, Route } from "react-router";
// Components
import { ThemeContextProvider } from "./assets/theme/ThemeContextProvider.jsx";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import Layout from "./components/Layout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <App>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </App>
    </ThemeContextProvider>
  </StrictMode>
);
