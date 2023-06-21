import { useState } from "react";
import { Typography } from "@mui/material";
import { emailAndPassword } from "../../Utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthForm } from "../../Components/AuthForm/AuthForm";

const SignIn = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    emailAndPassword(email, password).then((userCredential) => {
      if (userCredential instanceof Error) {
        setError(userCredential.message);
      } else {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <Typography variant="h2">Sign In</Typography>
      <AuthForm callback={handleSignIn} label="Sign In" />
      <br />
      <Typography variant="body1">
        <Link to="/sign-up">Don't have an account? Sign Up</Link>
      </Typography>
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default SignIn;
