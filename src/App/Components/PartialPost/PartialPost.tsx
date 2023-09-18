import "./PartialPost.css";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { PostType } from "../../Utils/Post";
import { Pages } from "../../Utils/Pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PostProps {
  post: PostType;
}

export const PartialPost = ({ post }: PostProps) => {
  return (
    <Box className="partialPost">
      <Typography variant="h2">
        <NavLink to={Pages.VIEW_POST + post.id}>{post.title}</NavLink>
      </Typography>

      <Typography variant="subtitle1">{post.description}</Typography>
      <br />
      <Typography variant="subtitle1">
        <NavLink to={Pages.VIEW_POST + post.id}>
          View Post <ArrowForwardIcon />
        </NavLink>
      </Typography>
    </Box>
  );
};
