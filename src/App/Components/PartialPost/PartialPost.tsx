import { Box, Typography } from "@mui/material";

interface PostProps {
  title: string;
  content: string;
}

export const PartialPost = ({ title, content }: PostProps) => {
  return (
    <Box>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h2">{content}</Typography>
    </Box>
  );
};
