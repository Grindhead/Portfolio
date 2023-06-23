import { TextField, Typography, Button } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { addPost } from "../../Utils/FirebasePosts";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const submitPost = () => {
    addPost(title, content);
    navigate(Pages.POST_CREATED);
  };

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

      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Enter your post here"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "link",
          "image",
        ]}
      />

      <br />
      <Button onClick={submitPost}>Submit Post</Button>
    </div>
  );
};

export default CreatePost;
