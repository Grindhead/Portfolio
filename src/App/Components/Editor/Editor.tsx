import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

interface EditorProps {
  callback: (title: string, description: string, content: string) => void;
  buttonLabel: string;
}

export const Editor = ({ callback, buttonLabel }: EditorProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    callback(title, description, content);
  };

  return (
    <Container>
      <TextField
        id="title"
        label="Post Title"
        variant="outlined"
        fullWidth
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        id="description"
        label="Post Description"
        variant="outlined"
        required
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
      <Button onClick={handleSubmit}>{buttonLabel}</Button>
    </Container>
  );
};
