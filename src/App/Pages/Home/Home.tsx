import { useState, useEffect, useCallback, useRef } from "react";
import { loadPosts } from "../../Utils/FirebasePosts";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { PartialPost } from "../../Components/PartialPost/PartialPost";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { collection, getCountFromServer } from "firebase/firestore";
import { Db } from "../../Utils/Firebase";

const Home = () => {
  const pageSize = 3;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([]);
  const count = useRef(0);

  const load = useCallback(async (page) => {
    try {
      const collectionRef = collection(Db, 'posts');
      const countSnap = await getCountFromServer(collectionRef);
      count.current = countSnap.data().count;
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
    load(0);
  }, [load]);

  return (
    <div>
      {isLoading && <Preloader />}
      {posts.map((post, index) => (
        <PartialPost post={post} key={index}></PartialPost>
      ))}
      {posts && (
        <PaginationComponent
          count={count.current / pageSize}
          handleChange={(newPage: number) => {
            load((newPage-1) * pageSize);
          }}
        />
      )}
    </div>
  );
};

export default Home;
