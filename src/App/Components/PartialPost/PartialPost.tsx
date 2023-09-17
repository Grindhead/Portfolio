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
      <NavLink to={Pages.VIEW_POST + post.id}>
        <Typography variant="h2">{post.title}</Typography>
      </NavLink>
      <Typography variant="subtitle1">{post.description}</Typography>
      <br />
      <NavLink to={Pages.VIEW_POST + post.id}>
        View Post <ArrowForwardIcon />
      </NavLink>
    </Box>
  );
};
