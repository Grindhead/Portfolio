import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { loadPost } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import { Typography, Link, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ViewPost = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();

  const navigate = useNavigate();

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

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  if (isLoading || !post) {
    return (
      <div>
        <div>
          <Preloader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link onClick={() => navigate(-1)}>
        <ArrowBackIcon className="backArrow" />
        Back
      </Link>
      <Typography variant="h1">{post.title}</Typography>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></Typography>
      {post.tagList.map((tag, i) => (
        <Chip label={tag} variant="outlined" onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ViewPost;
