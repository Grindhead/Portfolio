import * as React from 'react';
import { addPost } from "../../Utils/FirebasePosts";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import { Editor } from "../../Components/Editor/Editor";

const EditPost = () => {
  const navigate = useNavigate();
  const pageName = "Submit Post";

  const editPost = async (
    title: string,
    description: string,
    content: string,
    tags: string
  ) => {
    const id = await addPost(title, description, content, tags);
    navigate(Pages.POST_EDITED + ":" + id);
  };

  return (
    <div>
      <Editor callback={editPost} buttonLabel={pageName} />
    </div>
  );
};

export default EditPost;
