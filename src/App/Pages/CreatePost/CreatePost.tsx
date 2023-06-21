import { TextField, Typography, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = () => {};
  // https://mui.com/base-ui/react-textarea-autosize/
  return (
    <div>
      <Typography variant="h2">Create Post</Typography>
      <TextField
        id="title"
        label="Post Title"
        variant="standard"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextareaAutosize
        aria-label="Post Content"
        placeholder="Enter your post here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <Button onClick={submitPost}>Submit Post</Button>
    </div>
  );
};

export default CreatePost;
