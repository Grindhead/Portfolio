import { useState } from "react";
import { Typography, Link, Box } from "@mui/material";
import { emailAndPassword } from "../../Utils/FirebaseAuth";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthForm } from "../../Components/AuthForm/AuthForm";
import { Pages } from "../../Utils/Pages";
import { User } from "firebase/auth";

const SignIn = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    emailAndPassword(email, password).then((response: User | Error) => {
      if (response instanceof Error) {
        setError(response.message);
      } else {
        navigate(Pages.HOME);
      }
    });
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Typography variant="h2">Sign In</Typography>
      <AuthForm callback={handleSignIn} label="Sign In" />
      <br />
      <Typography variant="body1">
        Don't have an account?{" "}
        <Link component={RouterLink} to={Pages.SIGN_UP}>
          Sign Up
        </Link>
      </Typography>
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default SignIn;
