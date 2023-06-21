import "./Header.css";
import { Link } from "react-router-dom";
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
  },
}));

export default function Header() {
  const navigate = useNavigate();

  const classes = useStyles();

  const handleSignOut = async () => {
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
            <Link to={Pages.HOME} className={classes.link}>
              Home
            </Link>

            <Link to={Pages.ABOUT} className={classes.link}>
              About
            </Link>
            {Auth.currentUser ? (
              <Link to={Pages.CREATE_POST} className={classes.link}>
                Create Post
              </Link>
            ) : null}
            {Auth.currentUser ? (
              <Link
                to=""
                onClick={() => handleSignOut()}
                className={classes.link}
              >
                Sign Out
              </Link>
            ) : (
              <Link to={Pages.SIGN_IN} className={classes.link}>
                Sign In
              </Link>
            )}
          </div>
        </Toolbar>
      </header>
    </>
  );
}
