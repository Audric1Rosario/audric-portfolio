// Theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./assets/theme/ThemeContextProvider.jsx";
import "./App.css";

function App({ children }) {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default App;
