import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { emailAndPassword } from "../../Utils/Firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSignUp = () => {
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
      <Typography variant="h2">SignUp</Typography>
      <Box component="form">
        <TextField
          id="email"
          label="Email Address"
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="standard"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={() => handleSignUp()}>Sign Up</Button>
        <br />
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default SignUp;
