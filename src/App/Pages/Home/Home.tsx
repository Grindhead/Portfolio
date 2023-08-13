import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { loadPosts } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";

const Home = () => {
  const pageSize = 10;
  const pageNum = useRef<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
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

      <Preloader />

      {/* {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>{post.content}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
