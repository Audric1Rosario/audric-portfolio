import {
  Typography,
  Box,
  Container,
  IconButton,
  useTheme,
} from "@mui/material";
import darkBackground from "../assets/images/dark-background.jpg";
import lightBackground from "../assets/images/light-background.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import profileImage from "../assets/images/profile.png";
// Theme
import { useThemeContext } from "../assets/theme/ThemeContextProvider";

export default function Hero() {
  const { mode, toggleColorMode } = useThemeContext();
  const theme = useTheme();
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "700px",
        "@media (max-width:700px)": {
          minHeight: "100vh",
        },
        backgroundImage: `url(${
          mode === "dark" ? darkBackground : lightBackground
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            alignItems: "center",
            gap: 4, // separación entre texto e imagen
          }}
        >
          {/* Imagen */}
          <Box
            component="img"
            src={profileImage}
            alt="Audric Rosario"
            sx={{
              width: { xs: "200px", md: "300px" },
              height: "auto",
              borderRadius: "50%", // imagen circular
              boxShadow: 3, // sombra
            }}
          />
          <Box>
            <IconButton
              component="a"
              href="https://github.com/Audric1Rosario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="light" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/audricrosario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn color="light" />
            </IconButton>
            <Typography
              variant="h2"
              fontWeight="bold"
              component="h1"
              gutterBottom
            >
              Audric Rosario
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Computer Systems Engineer
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
