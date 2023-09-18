import { addPost } from "../../Utils/FirebasePosts";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import { Editor } from "../../Components/Editor/Editor";

const EditPost = () => {
  const navigate = useNavigate();
  const pageName = "Edit Post";

  const editPost = (
    title: string,
    description: string,
    content: string,
    tags: string
  ) => {
    addPost(title, description, content, tags);
    navigate(Pages.POST_CREATED);
  };

  return (
    <div>
      <Editor callback={editPost} buttonLabel={pageName} />
    </div>
  );
};

export default EditPost;
