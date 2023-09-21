import "./Footer.css";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

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
              craigbeswetherick@gmail.com
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link to="https://www.facebook.com/gaming/GrindheadGames">
              <FacebookIcon className="icon" />
              facebook
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <TwitterIcon className="icon" />
            <Link to="https://twitter.com/GrindheadGames">@GrindheadGames</Link>
          </Typography>
        </div>
      </Box>
    </footer>
  );
}
