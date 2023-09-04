import "./Footer.css";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box>
        <Typography variant="h4">Email: </Typography>
        <Link to="mailto:craigbeswetherick@gmail.com">
          craigbeswetherick@gmail.com
        </Link>
      </Box>
    </footer>
  );
}
