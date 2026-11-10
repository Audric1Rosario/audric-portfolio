import { createTheme } from "@mui/material/styles";

// Tokyo Night (dark) + Slate (light). Colors live here; background effects live in styles/global.css.
export const MODE_STORAGE_KEY = "audric-theme-mode";

const fontSans = '"Inter Variable", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
export const fontMono =
  '"JetBrains Mono Variable", "JetBrains Mono", ui-monospace, "Cascadia Code", Consolas, monospace';

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data-theme" },
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: "#7aa2f7", contrastText: "#0f111a" },
        secondary: { main: "#bb9af7", contrastText: "#0f111a" },
        info: { main: "#7dcfff" },
        success: { main: "#9ece6a" },
        warning: { main: "#e0af68" },
        error: { main: "#f7768e" },
        background: { default: "#13141c", paper: "#1a1b26" },
        text: { primary: "#c0caf5", secondary: "#9aa5ce", disabled: "#565f89" },
        divider: "#292e42",
      },
    },
    light: {
      palette: {
        primary: { main: "#3d59a1", contrastText: "#ffffff" },
        secondary: { main: "#7847bd", contrastText: "#ffffff" },
        info: { main: "#0f6e96" },
        success: { main: "#3f6d1f" },
        warning: { main: "#8f5e15" },
        error: { main: "#b4233f" },
        background: { default: "#f8fafc", paper: "#ffffff" },
        text: { primary: "#0f172a", secondary: "#475569", disabled: "#94a3b8" },
        divider: "#e2e8f0",
      },
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: fontSans,
    h1: { fontWeight: 750, letterSpacing: "-0.035em", lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 650, letterSpacing: "-0.015em" },
    h5: { fontWeight: 650, letterSpacing: "-0.01em" },
    h6: { fontWeight: 650 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
    overline: { fontFamily: fontMono, letterSpacing: "0.12em", fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { backgroundColor: "transparent" } },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          border: `1px solid ${theme.vars.palette.divider}`,
        }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 10, paddingInline: 18 } },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: fontMono, fontSize: "0.72rem", height: 26, borderRadius: 8 },
      },
    },
    MuiTooltip: {
      defaultProps: { arrow: true },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
    },
  },
});

export default theme;
