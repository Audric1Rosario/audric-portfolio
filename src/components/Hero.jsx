import { useState, useEffect } from "react";
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
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import profileImage from "../assets/images/profile.png";
// Theme
import { useThemeContext } from "../assets/theme/ThemeContextProvider";

export default function Hero() {
  const { mode, toggleColorMode } = useThemeContext();
  const titles = [
    "Systems and Computer Engineer",
    "Full Stack Developer",
    "Future Data Scientist",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  // Adjust for typing speed
  const speed = 150;
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const deleteSpeed = 75;

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentFullTitle = titles[currentTitleIndex];

      if (isDeleting) {
        setDisplayedTitle(
          currentFullTitle.substring(0, displayedTitle.length - 1)
        );
        setTypingSpeed(deleteSpeed);
      } else {
        setDisplayedTitle(
          currentFullTitle.substring(0, displayedTitle.length + 1)
        );
        setTypingSpeed(speed);
      }

      if (!isDeleting && displayedTitle === currentFullTitle) {
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause before deleting
      } else if (isDeleting && displayedTitle === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [displayedTitle, isDeleting, currentTitleIndex, titles, typingSpeed]);

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
            gap: 4, // between text/image gap
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
              borderRadius: "50%", // circular profile picture
              boxShadow: 3, // profile shadow
            }}
          />
          <Box>
            <IconButton
              title="GitHub"
              component="a"
              href="https://github.com/Audric1Rosario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="light" />
            </IconButton>
            <IconButton
              title="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/audricrosario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn color="light" />
            </IconButton>
            <IconButton
              title="Contact"
              component="a"
              href="mailto:audricarr050@gmail.com"
              rel="noopener noreferrer"
            >
              <EmailOutlinedIcon color="light" />
            </IconButton>
            <Typography
              variant="h2"
              fontWeight="bold"
              component="h1"
              gutterBottom
            >
              Audric Rosario
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "1.25rem", md: "1.75rem" } }}
              component="h2"
              gutterBottom
            >
              {displayedTitle + "."}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
