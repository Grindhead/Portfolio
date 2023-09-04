import "./PartialPost.css";
import { Box, Link, Typography } from "@mui/material";
import { PostType } from "../../Utils/Post";
import { Pages } from "../../Utils/Pages";

interface PostProps {
  post: PostType;
}

export const PartialPost = ({ post }: PostProps) => {
  return (
    <Box className="partialPost">
      <Link href={Pages.VIEW_POST + post.id}>
        <Typography variant="h2">{post.title}</Typography>
      </Link>
      <Typography variant="subtitle1">{post.description}</Typography>
      <br />
      <Link href={Pages.VIEW_POST + post.id} underline="always">
        View Post
      </Link>
    </Box>
  );
};
