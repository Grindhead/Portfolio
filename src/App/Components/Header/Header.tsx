import "./Header.css";
import { NavLink } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppTheme from "../../Themes/Theme";
import { Auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import Logo from "../../../Assets/images/logo.png";

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
    "&.active": {
      fontWeight: "bold",
    },
  },
}));

export default function Header() {
  const navigate = useNavigate();

  const classes = useStyles();

  const handleSignOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await Auth.signOut().then(() => {
      navigate(Pages.LOGGED_OUT);
    });
  };

  return (
    <>
      <header>
        <img src={Logo} alt="logo" className="logo" />
        <Toolbar>
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
        </Toolbar>
      </header>
    </>
  );
}
