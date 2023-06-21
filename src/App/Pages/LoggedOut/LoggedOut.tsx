import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoggedOut = () => {
  return (
    <div>
      <Typography variant="h2">
        You have successfully logged out of your account.
      </Typography>
      <Link to="/">Return to homepage</Link>
    </div>
  );
};

export default LoggedOut;
