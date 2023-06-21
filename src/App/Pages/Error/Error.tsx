import { Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import { Pages } from "../../Utils/Pages";

const Error = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div>
      <Typography variant="h1">{error.statusText || error.message}</Typography>
      <Link to={Pages.HOME}>Return to homepage</Link>
    </div>
  );
};

export default Error;
