import { useState, useEffect, useCallback } from "react";
import { loadPosts } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { PartialPost } from "../../Components/PartialPost/PartialPost";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";

const Home = () => {
  const pageSize = 3;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  const load = useCallback(async (page) => {
    try {
      setIsLoading(true);
      const loadedPosts = await loadPosts(page, pageSize);
      setPosts(loadedPosts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading posts:", error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load(1);
  }, [load]);

  return (
    <div>
      {isLoading && <Preloader />}
      {posts.map((post, index) => (
        <PartialPost post={post} key={index}></PartialPost>
      ))}
      {posts && (
        <PaginationComponent
          handleChange={(newPage: number) => {
            load(newPage);
          }}
        />
      )}
    </div>
  );
};

export default Home;
