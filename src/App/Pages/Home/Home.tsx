import { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { loadPosts } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { PartialPost } from "../../Components/PartialPost/PartialPost";

const Home = () => {
  const pageSize = 10;
  const pageNum = useRef<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      console.log("getting posts");
      setIsLoading(true);
      const loadedPosts = await loadPosts(pageNum.current, pageSize);
      pageNum.current += pageSize;
      setPosts((prevPosts) => [...prevPosts, ...loadedPosts]);
      setIsLoading(false);
      setHasLoaded(true);
    };

    if (!hasLoaded) {
      getPosts();
    }
  }, [hasLoaded]);

  return (
    <div>
      <Typography variant="h2">Home</Typography>

      {isLoading && <Preloader />}

      {posts.map((post, index) => (
        <PartialPost post={post} key={index}></PartialPost>
      ))}
    </div>
  );
};

export default Home;
