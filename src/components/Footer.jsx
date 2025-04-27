import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { IconButton, Typography, Tooltip } from "@mui/material";
//import "../assets/styles/Footer.css";

function Footer() {
  return (
    <>
      <IconButton
        component="a"
        href="https://github.com/Audric1Rosario"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon color="primary" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/audricrosario/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn color="primary" />
      </IconButton>

      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Portfolio designed & built by Audric
        Rosario — All rights reserved
      </Typography>
    </>
  );
}

export default Footer;
