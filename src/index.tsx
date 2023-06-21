import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppTheme from "./App/Themes/Theme";
import { lazy } from "react";
import SignIn from "./App/Pages/SignIn/SignIn";

const Home = lazy(() => import("./App/Pages/Home/Home"));
const About = lazy(() => import("./App/Pages/About/About"));
const SignUp = lazy(() => import("./App/Pages/SignUp/SignUp"));
const Error = lazy(() => import("./App/Pages/Error/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
