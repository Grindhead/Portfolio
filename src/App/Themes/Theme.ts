import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let AppTheme = createTheme({
  palette: {
    primary: {
      main: "#47b1fb",
    },
    background: {
      default: "#47b1fb",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          minHeight: "20vh",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            background: "grey",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "black",
          },
        },
      },
    },
  },
});

AppTheme = responsiveFontSizes(AppTheme);

export default AppTheme;
