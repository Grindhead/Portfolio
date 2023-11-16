import * as React from 'react';
import "./PostCreated.css";
import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PostCreated = () => {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h1">Your post was created!</Typography>
      <Typography variant="body1">
        <Link to={Pages.VIEW_POST + ":" + id}>
          View Your Post <ArrowForwardIcon className="forwardIcon" />
        </Link>
      </Typography>
      <Typography variant="body1">
        <Link to={Pages.HOME}>
          <ArrowBackIcon className="backArrow" />
          Return to Homepage
        </Link>
      </Typography>
    </div>
  );
};

export default PostCreated;
