import { Link } from "@material-ui/core";
import "./Header.css";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <header>
        <Typography variant="h1">Header</Typography>
      </header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
}
