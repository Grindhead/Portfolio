import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { PartialPost } from "../../Components/PartialPost/PartialPost";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { pageSize } from "../../Utils/Constants";
import { collection, getCountFromServer } from "firebase/firestore";
import { Db } from "../../Utils/Firebase";
import { loadPostsByTag } from "../../Utils/FirebasePosts";

const Search = () => {
  const { searchTerm } = useParams();
  const [posts, setPosts] = useState<PostType[]>([]);
  const count = useRef(0);

  const load = useCallback(
    async (page) => {
      try {
        //searchTerm;
        console.log(page, searchTerm);
        const collectionRef = collection(Db, "posts");
        const countSnap = await getCountFromServer(collectionRef);
        count.current = countSnap.data().count;
        const loadedPosts = await loadPostsByTag(
          searchTerm,
          page * pageSize + 1,
          pageSize
        );
        console.log(loadedPosts, "loadedPosts");
        setPosts(loadedPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    },
    [searchTerm]
  );

  useEffect(() => {
    load(0);
  }, [load]);

  return (
    <div>
      {posts.length <= 0 && <Preloader />}
      {posts.map((post, index) => (
        <PartialPost post={post} key={index}></PartialPost>
      ))}
      {posts.length > 0 && (
        <PaginationComponent
          count={count.current / pageSize}
          handleChange={(newPage: number) => {
            load(newPage - 1);
          }}
        />
      )}
    </div>
  );
};

export default Search;
