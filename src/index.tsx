import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppTheme from "./App/Themes/Theme";
import { Home } from "./App/Pages/Home/Home";
import { About } from "./App/Pages/About/About";
import { Error } from "./App/Pages/Error/Error";

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
