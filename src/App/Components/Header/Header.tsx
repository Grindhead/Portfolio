import "./Header.css";
import "animate.css";
import { NavLink } from "react-router-dom";
import { Toolbar, TextField, InputAdornment, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AppTheme, { tertiary } from "../../Themes/Theme";

const useStyles = makeStyles((theme: typeof AppTheme) => ({
  navlinks: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    maxWidth: "10%",
    flexBasis: "10%",
    marginRight: "1rem",
    textAlign: "center",
    "&:active": {
      fontWeight: "bold",
    },
    "&:hover": {
      fontWeight: "bold",
      color: tertiary,
    },
  },
}));

export default function Header() {
  console.log(Auth.currentUser, "logged in");

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const classes = useStyles();

  const handleSignOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await Auth.signOut().then(() => {
      navigate(Pages.LOGGED_OUT);
    });
  };

  const handleClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`${Pages.SEARCH}:${searchTerm}`);
  };

  const handleMouseDownSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <h1 id="title">GRINDHEAD</h1>
        <Toolbar className="navBar">
          <div className={classes.navlinks}>
            <NavLink to={Pages.HOME} className={classes.link}>
              Home
            </NavLink>

            <NavLink to={Pages.ABOUT} className={classes.link}>
              About
            </NavLink>
            {Auth.currentUser ? (
              <NavLink to={Pages.CREATE_POST} className={classes.link}>
                Create Post
              </NavLink>
            ) : null}
            {Auth.currentUser ? (
              <NavLink
                to={Pages.LOGGED_OUT}
                onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                  handleSignOut(event)
                }
                end
                className={classes.link}
              >
                Sign Out
              </NavLink>
            ) : (
              <NavLink to={Pages.SIGN_IN} className={classes.link}>
                Sign In
              </NavLink>
            )}
            <TextField
              type="search"
              id="search"
              label="Search"
              variant="outlined"
              className="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="search"
                      onClick={handleClickSearch}
                      onMouseDown={handleMouseDownSearch}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Toolbar>
      </header>
    </>
  );
}
