import "./Footer.css";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box>
        <div className="houses" />
        <div className="footer-content">
          <Typography variant="h4">Email: </Typography>
          <Link to="mailto:craigbeswetherick@gmail.com">
            craigbeswetherick@gmail.com
          </Link>
        </div>
      </Box>
    </footer>
  );
}
