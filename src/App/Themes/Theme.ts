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
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          minHeight: "20vh",
        },
      },
    },
  },
});

AppTheme = responsiveFontSizes(AppTheme);

export default AppTheme;
