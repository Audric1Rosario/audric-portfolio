import { useState } from "react";
// Components
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  Stack,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "./Footer";

// Theme
import { useThemeContext } from "../assets/theme/ThemeContextProvider";

// Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// Router
import { Outlet } from "react-router";
import { useNavigate } from "react-router";

// items
const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Me",
    url: "/",
  },
  {
    title: "Expertise",
    url: "/",
  },
  {
    title: "History",
    url: "/",
  },
  {
    title: "Projects",
    url: "/",
  },
  {
    title: "Contact",
    url: "/",
  },
];

export default function Layout() {
  const { mode, toggleColorMode } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigator = useNavigate();

  // Drawer
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menu = menuItems.map((item) => (
    <ListItemButton key={item.title} onClick={() => navigator(item.url)}>
      <ListItemText primary={item.title} />
    </ListItemButton>
  ));

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>{menu}</List>
    </Box>
  );

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar component="header" position="sticky">
        <Toolbar>
          {/* Toggle mode (dark/light) */}
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: theme.spacing(2), flexGrow: 1 }}
          >
            My Portfolio
          </Typography>

          {/* Open Drawer */}
          {isMobile ? (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuOutlinedIcon />
            </IconButton>
          ) : (
            <Box display="flex" justifyContent="center" gap={theme.spacing(1)}>
              {/* <Button color="inherit">Placeholder</Button>
              <IconButton color="inherit">
                <Brightness7Icon />
              </IconButton> */}
              {/* <List component={Stack} direction="row">
                {menu}
              </List> */}
              <List component={Stack} direction="row">
                {menu}
              </List>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>

      <Box component="main" flexGrow={1}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: "auto",
          textAlign: "center",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
