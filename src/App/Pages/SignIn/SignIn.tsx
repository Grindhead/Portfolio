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
      <Typography variant="h2">SignIn</Typography>
      <AuthForm handleSignUp={handleSignIn} label="Sign In" />
      <br />
      <Typography variant="body1" color="error">
        Have an account already? <Link to="/sign-in">Sign in</Link>
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
