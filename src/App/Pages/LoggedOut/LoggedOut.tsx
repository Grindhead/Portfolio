import * as React from 'react';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Pages } from "../../Utils/Pages";

const LoggedOut = () => {
  return (
    <div>
      <Typography variant="h2">
        You have successfully logged out of your account.
      </Typography>
      <Link to={Pages.HOME}>Return to Homepage</Link>
    </div>
  );
};

export default LoggedOut;
