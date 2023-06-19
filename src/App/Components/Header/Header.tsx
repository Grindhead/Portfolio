import "./Header.css";
import { Link } from "react-router-dom";
import { Typography, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppTheme from "../../Themes/Theme";

const useStyles = makeStyles((theme: typeof AppTheme) => ({
  navlinks: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      color: "red",
    },
    maxWidth: "10%",
    flexBasis: "10%",
    marginRight: "1rem",
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <header>
        <Typography variant="h1">Header</Typography>
        <Toolbar>
          <div className={classes.navlinks}>
            <Link to={"/"} className={classes.link}>
              Home
            </Link>

            <Link to={"/about"} className={classes.link}>
              About
            </Link>

            <Link to={"/sign-up"} className={classes.link}>
              Sign Up
            </Link>
          </div>
        </Toolbar>
      </header>
    </>
  );
}
