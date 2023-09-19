import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const primary: string = "#47b1fb";
export const secondary: string = "#FFFFFF";
export const tertiary: string = "#fb4848";

let AppTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },

    background: {
      default: "#47b1fb",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "white",
        },
        body1: {
          color: "white",

          a: {
            color: "white",
            textDecoration: "none",
            "&:hover": {
              color: "black",
              textDecoration: "underline",
            },
          },
        },
        h2: {
          fontSize: "14pt",
          color: "white",
          margin: "1rem 0 0 0",
          textTransform: "capitalize",

          a: {
            color: "white",
            textDecoration: "none",
            "&:hover": {
              color: "black",
              textDecoration: "underline",
            },
          },
        },

        subtitle1: {
          fontSize: "1em",
          color: "white",
          marginLeft: "0.5vw",
          a: {
            color: "white",
            textDecoration: "none",
            "&:hover": {
              color: "black",
              textDecoration: "underline",
            },
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
          "&:hover": {
            textDecoration: "underline",
            color: "black",
            fontWeight: "bold",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          margin: "1rem 0",
          padding: "1rem 6rem",
          borderRadius: "14px",
          width: "auto",
          backgroundColor: "white",
          "&:hover": {
            color: "black",
            fontWeight: "bold",
            backgroundColor: "rgba(256,256,256, 0.75)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primary,
          "&:hover": {
            color: "#000000",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
          padding: "0.5rem 0.5rem 0.5rem 0",
          "&:hover": {
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          margin: "10px 0",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          background: "white",
          "&.Mui-focused": {
            borderColor: "#FFFFFF",
            borderStlye: "solid",
          },
          variant: "outlined",
          size: "medium",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          borderRadius: "1em",
          padding: "0 10px",
          color: "black",
          background: "white",
          "&.Mui-focused": {
            color: "black",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: "1em",
        },
      },
    },
  },
});

AppTheme = responsiveFontSizes(AppTheme);

export default AppTheme;
