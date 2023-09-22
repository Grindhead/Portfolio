import { addPost } from "../../Utils/FirebasePosts";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../Utils/Pages";
import { Editor } from "../../Components/Editor/Editor";
import { loadPost } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { useState, useEffect } from "react";

const EditPost = () => {
  const navigate = useNavigate();
  const pageName = "Edit Post";

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      const loadedPost = await loadPost(id);
      setPost(loadedPost);
      setIsLoading(false);
      setHasLoaded(true);
    };

    if (!hasLoaded) {
      getPost();
    }
  }, [hasLoaded, id]);

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
