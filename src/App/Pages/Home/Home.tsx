import { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { loadPosts } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";

const Home = () => {
  const pageSize = 10;
  const pageNum = useRef<string>("0");
  let currentPosts = useRef<PostType[]>([]);
  let isLoading = useRef<boolean>(false);

  useEffect(() => {
    const getPosts = async () => {
      currentPosts.current = await loadPosts(pageNum.current, pageSize);
      pageNum.current += pageSize;
      currentPosts.current.forEach((item, index) => {
        console.log(item, index);
      });
      isLoading.current = false;
    };
    if (isLoading.current === false) {
      getPosts();
      isLoading.current = true;
    }
  }, []);

  return (
    <div>
      <Typography variant="h2">Home</Typography>

      {isLoading.current}
    </div>
  );
};

export default Home;
