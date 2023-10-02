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
import AppTheme from "../../Themes/Theme";
import Gear from "../../../Assets/Images/gear.png";

const useStyles = makeStyles((theme: typeof AppTheme) => ({
  navlinks: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    flexBasis: "5%",
    marginRight: "1rem",
    textAlign: "center",
    "&:active": {
      fontWeight: "bold",
    },
    "&:hover": {
      fontWeight: "bold",
      color: "black",
    },
  },
}));

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const handleSignOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await Auth.signOut().then(() => {
      navigate(Pages.LOGGED_OUT);
    });
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    // if the search term is empty, don't navigate, causes error
    if (searchTerm === "") return;
    navigate(`${Pages.SEARCH}${searchTerm}`);
  };

  const handleMouseDownSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <div className="clouds" />
        <div className="background">
          <img src={Gear} alt="background" className="gear-1" />
          <img src={Gear} alt="background" className="gear-2" />
          <h1 id="title">GRINDHEAD</h1>
        </div>
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
          </div>
          <TextField
            type="search"
            id="search"
            label="Search"
            variant="standard"
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    onClick={handleSearch}
                    onKeyDown={handleSearch}
                    onMouseDown={handleMouseDownSearch}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>

        <div className="bars" />
      </header>
    </>
  );
}
