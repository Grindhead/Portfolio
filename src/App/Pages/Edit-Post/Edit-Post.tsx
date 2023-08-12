import { Typography } from "@mui/material";
import { addPost } from "../../Utils/FirebasePosts";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import { Editor } from "../../Components/Editor/Editor";

const CreatePost = () => {
  const navigate = useNavigate();
  const pageName = "Edit Post";

  const editPost = (title: string, description: string, content: string) => {
    addPost(title, description, content);
    navigate(Pages.POST_CREATED);
  };

  return (
    <div>
      <Typography variant="h2">{pageName}</Typography>
      <Editor callback={editPost} buttonLabel={pageName} />
    </div>
  );
};

export default CreatePost;
