import "./PartialPost.css";
import { Box, Link, Typography } from "@mui/material";
import { PostType } from "../../Utils/Post";

interface PostProps {
  post: PostType;
}

export const PartialPost = ({ post }: PostProps) => {
  return (
    <Box className="partialPost">
      <Typography variant="h2">{post.title}</Typography>
      <Typography variant="subtitle1">{post.description}</Typography>
      <br />
      <Link href="#" underline="always">
        View Post
      </Link>
    </Box>
  );
};
