import * as React from 'react';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Pages } from "../../Utils/Pages";

const PostDeleted = () => {
  return (
    <div>
      <Typography variant="h1">Your Post Has Been Deleted</Typography>
      <Typography variant="subtitle1">
        <Link to={Pages.HOME}>Return to Homepage</Link>
      </Typography>
    </div>
  );
};

export default PostDeleted;
