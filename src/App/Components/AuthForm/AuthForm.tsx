import * as React from 'react';
import "./AuthForm.css";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface AuthFormProps {
  callback: (email: string, password: string) => void;
  label: string;
}

export const AuthForm = ({ callback, label }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box className="auth">
      <TextField
        id="email"
        name="email"
        type="email"
        label="Email Address"
        autoFocus
        required
        variant="outlined"
        value={email}
        color="secondary"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <TextField
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        autoComplete="off"
        value={password}
        required
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
      <Button variant="contained" onClick={() => callback(email, password)}>
        {label}
      </Button>
    </Box>
  );
};
