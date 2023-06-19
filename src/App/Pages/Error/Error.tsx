import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div>
      <Typography variant="h1">{error.statusText || error.message}</Typography>
    </div>
  );
};

export default Error;
