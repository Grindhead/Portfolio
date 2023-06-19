import "./Header.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <header>
        <Typography variant="h1">Header</Typography>
      </header>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
    </>
  );
}
