import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import { PostType } from "../../Utils/Post";
import { Preloader } from "../../Components/Preloader/Preloader";
import { PartialPost } from "../../Components/PartialPost/PartialPost";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { pageSize } from "../../Utils/Constants";
import { collection } from "firebase/firestore";
import { Db } from "../../Utils/Firebase";
import { loadPostsByTag, getCountByTag } from "../../Utils/FirebasePosts";

const Search = () => {
  const { searchTerm } = useParams();
  const [posts, setPosts] = useState<PostType[]>([]);
  const count = useRef(0);

  const load = useCallback(
    async (page: number) => {
      try {
        count.current = await getCountByTag(searchTerm);
        const loadedPosts = await loadPostsByTag(searchTerm, page, pageSize);
        console.log(loadedPosts.length, "loadedPosts");
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
      {posts.length > pageSize && (
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
