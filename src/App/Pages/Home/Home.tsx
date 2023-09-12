import { useState, useEffect } from "react";
import { loadPosts } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { PartialPost } from "../../Components/PartialPost/PartialPost";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";

const Home = () => {
  const pageSize = 3;
  const [pageNum, setPageNum] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      setHasLoaded(false);
      setIsLoading(true);
      const loadedPosts = await loadPosts(pageNum * pageSize, pageSize);
      setPosts(() => [...loadedPosts]);
      setIsLoading(false);
      setHasLoaded(true);
    };

    if (!hasLoaded) {
      getPosts();
    }
  }, [hasLoaded, pageNum]);

  return (
    <div>
      {isLoading && <Preloader />}
      {posts.map((post, index) => (
        <PartialPost post={post} key={index}></PartialPost>
      ))}
      {posts && (
        <PaginationComponent
          handleChange={(page: number) => {
            setHasLoaded(false);
            setPageNum(pageNum + 1);
            console.log("page load triggered", pageNum);
          }}
        />
      )}
    </div>
  );
};

export default Home;
