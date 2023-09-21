import { useState } from "react";
import { Typography } from "@mui/material";
import { User } from "firebase/auth";
import { emailAndPassword } from "../../Utils/FirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { AuthForm } from "../../Components/AuthForm/AuthForm";
import { Pages } from "../../Utils/Pages";

const SignUp = () => {
  const [error, setError] = useState(localStorage.getItem("username") || "");
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    console.log("handleSignUp", email.trim(), password);
    emailAndPassword(email.trim(), password).then(
      (userCredential: User | Error) => {
        if (userCredential instanceof Error) {
          setError(userCredential.message);
        } else {
          localStorage.setItem("username", email);
          navigate(Pages.HOME);
        }
      }
    );
  };

  return (
    <div>
      <Typography variant="h2">Sign Up</Typography>
      <AuthForm callback={handleSignUp} label="Sign Up" />
      <br />
      <Typography variant="body1">
        <Link to={Pages.SIGN_IN}>Have an account already? Sign In</Link>
      </Typography>
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default SignUp;
