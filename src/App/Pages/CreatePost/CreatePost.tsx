import { addPost } from "../../Utils/FirebasePosts";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import { Editor } from "../../Components/Editor/Editor";

const CreatePost = () => {
  const navigate = useNavigate();
  const pageName = "Submit Post";

  const submitPost = async (
    title: string,
    description: string,
    content: string,
    tags: string
  ) => {
    const id = await addPost(title, description, content, tags);
    navigate(Pages.POST_CREATED + ":" + id);
  };

  return (
    <div>
      <Editor callback={submitPost} buttonLabel={pageName} />
    </div>
  );
};

export default CreatePost;
