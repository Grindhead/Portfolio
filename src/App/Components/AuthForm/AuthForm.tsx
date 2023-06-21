import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface AuthFormProps {
  callback: (email: string, password: string) => void;
  label: string;
}

export const AuthForm = ({ callback, label }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
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
      <Button onClick={() => callback(email, password)}>{label}</Button>
    </Box>
  );
};
