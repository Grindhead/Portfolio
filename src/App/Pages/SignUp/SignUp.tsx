import { useState } from "react";
import { Typography } from "@mui/material";
import { emailAndPassword } from "../../Utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthForm } from "../../Components/AuthForm/AuthForm";

const SignUp = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
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
      <Typography variant="h2">Sign Up</Typography>
      <AuthForm callback={handleSignUp} label="Sign Up" />
      <br />
      <Typography variant="body1">
        <Link to="/sign-in">Have an account already? Sign in</Link>
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
