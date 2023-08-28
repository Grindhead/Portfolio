import { Box, Typography } from "@mui/material";
import { PostType } from "../../Utils/Post";

interface PostProps {
  post: PostType;
}

export const PartialPost = ({ post }: PostProps) => {
  return (
    <Box className="partialPost">
      <Typography variant="h2">{post.title}</Typography>
      <Typography variant="h2">{post.description}</Typography>
    </Box>
  );
};
