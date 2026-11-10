import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import MenuRounded from "@mui/icons-material/MenuRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import useScrollSpy from "../../hooks/useScrollSpy";
import { fontMono } from "../../theme/theme";

const navItems = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "career", label: "Career" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const isDark = (mode ?? "dark") === "dark";
  return (
    <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <IconButton
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setMode(isDark ? "light" : "dark")}
        sx={{ border: 1, borderColor: "divider", borderRadius: 2.5, color: "text.primary" }}
      >
        {isDark ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navItems.map((i) => i.id));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        bgcolor: "var(--ar-glass)",
        backdropFilter: "saturate(160%) blur(12px)",
        WebkitBackdropFilter: "saturate(160%) blur(12px)",
        borderBottom: 1,
        borderColor: "divider",
        color: "text.primary",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, minHeight: { xs: 64 } }}>
          <Box
            component="a"
            href="#top"
            aria-label="Audric Rosario, back to top"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              color: "inherit",
              textDecoration: "none",
              mr: "auto",
            }}
          >
            <Box
              aria-hidden
              sx={(theme) => ({
                ...theme.applyStyles("light", { color: "#ffffff" }),
                width: 34,
                height: 34,
                borderRadius: 2,
                display: "grid",
                placeItems: "center",
                background: "var(--ar-ring)",
                color: "#0f111a",
                fontFamily: fontMono,
                fontWeight: 700,
                fontSize: 14,
              })}
            >
              AR
            </Box>
            <Typography sx={{ fontWeight: 650, display: { xs: "none", sm: "block" } }}>Audric Rosario</Typography>
          </Box>

          <Box component="nav" aria-label="Main" sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                size="small"
                aria-current={active === item.id ? "true" : undefined}
                sx={{
                  color: active === item.id ? "primary.main" : "text.secondary",
                  px: 1.5,
                  "&:hover": { color: "text.primary", bgcolor: "action.hover" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <ThemeToggle />
          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" }, color: "text.primary" }}
          >
            <MenuRounded />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: 260 } } }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
            <CloseRounded />
          </IconButton>
        </Box>
        <List component="nav" aria-label="Mobile">
          {navItems.map((item) => (
            <ListItemButton
              key={item.id}
              component="a"
              href={`#${item.id}`}
              selected={active === item.id}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
