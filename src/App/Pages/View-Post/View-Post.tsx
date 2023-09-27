import "./ViewPost.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { loadPost } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import { Typography, Link, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Auth } from "../../Utils/Firebase";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Pages } from "../../Utils/Pages";

const ViewPost = () => {
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();

  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const loadedPost = await loadPost(id);
      setPost(loadedPost);
      setHasLoaded(true);
    };

    if (!hasLoaded) {
      getPost();
    }
  }, [hasLoaded, id]);

  if (post !== undefined) {
    return (
      <div>
        <div>
          <Preloader />
        </div>
      </div>
    );
  }

  if (post !== undefined && Auth.currentUser?.uid === post.authorId) {
    console.log(Auth.currentUser?.uid, post.authorId);
  } else {
    console.log("post is null");
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
        <Chip label={tag} variant="outlined" key={i} />
      ))}
      {Auth.currentUser?.uid === post.authorId && (
        <div>
          <br />
          <Link className="edit" href={Pages.EDIT_POST + id}>
            <EditNoteIcon className="editIcon" /> Edit
          </Link>
        </div>
      )}
    </div>
  );
};

export default ViewPost;
