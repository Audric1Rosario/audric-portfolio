import "./index.css";
import { StrictMode } from "react";
// React
import { createRoot } from "react-dom/client";
// React Router
import { createBrowserRouter, RouterProvider } from "react-router";
// Components
import { ThemeContextProvider } from "./assets/theme/ThemeContextProvider.jsx";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import Layout from "./components/Layout.jsx";

const basename = import.meta.env.BASE_URL;
const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Main,
        },
      ],
    },
  ],
  { basename: basename }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <App>
        <RouterProvider router={router} />
      </App>
    </ThemeContextProvider>
  </StrictMode>
);
