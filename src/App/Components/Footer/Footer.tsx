import "./Footer.css";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer>
      <Box>
        <div className="houses" />
        <div className="bars" />
        <div className="footer-content">
          <Typography variant="subtitle1">
            <Link to="mailto:craigbeswetherick@gmail.com">
              <EmailIcon className="icon" />
              Email
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link to="https://www.facebook.com/gaming/GrindheadGames">
              <FacebookIcon className="icon" />
              Facebook
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link to="https://twitter.com/GrindheadGames">
              <TwitterIcon className="icon" />
              Twitter
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link to="https://github.com/Grindhead">
              <GitHubIcon className="icon" />
              Github
            </Link>
          </Typography>
        </div>
      </Box>
    </footer>
  );
}
