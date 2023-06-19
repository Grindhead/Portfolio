import { Typography } from "@material-ui/core";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div>
      <Typography component="p">{error.statusText || error.message}</Typography>
    </div>
  );
};
