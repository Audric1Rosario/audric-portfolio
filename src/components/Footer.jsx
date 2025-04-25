import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Audric1Rosario" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/audricrosario/" target="_blank">
          <LinkedIn />
        </a>
        <p>
          A portfolio designed & built by <span>Audric Rosario</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
