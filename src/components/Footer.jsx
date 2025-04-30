import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { IconButton, Typography, Tooltip } from "@mui/material";
//import "../assets/styles/Footer.css";

function Footer() {
  return (
    <>
      <IconButton
        title="GitHub"
        component="a"
        href="https://github.com/Audric1Rosario"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon color="primary" />
      </IconButton>
      <IconButton
        title="LinkedIn"
        component="a"
        href="https://www.linkedin.com/in/audricrosario/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn color="primary" />
      </IconButton>
      <IconButton
        title="Contact"
        component="a"
        href="mailto:audricarr050@gmail.com"
        rel="noopener noreferrer"
      >
        <EmailOutlinedIcon color="primary" />
      </IconButton>

      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Portfolio designed & built by Audric
        Rosario — All rights reserved
      </Typography>
    </>
  );
}

export default Footer;
