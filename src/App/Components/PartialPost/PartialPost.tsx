import * as React from 'react';
import "./PartialPost.css";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PartialPost = ({ post }) => {
  return (
    <Box className="partialPost">
      <Typography variant="h2">
        <NavLink to={Pages.VIEW_POST + post.id}>{post.title}</NavLink>
      </Typography>
      <Typography variant="body1">{post.description}</Typography>
      <Typography variant="body1">
        <NavLink to={Pages.VIEW_POST + post.id}>
          View Post <ArrowForwardIcon className="forwardIcon" />
        </NavLink>
      </Typography>
    </Box>
  );
};
