import { deletePosts } from "./deletePosts.mjs";
import config from "../../id.json";
import { db } from "./utils.mjs";

export const addPosts = async () => {
  try {
    await deletePosts();

    const adminId = config.id;
    const postsRef = db.collection("posts");

    for (var i = 0; i < 30; i++) {
      const postCount = await postsRef.count().get();
      await postsRef.add({
        title: "title " + i.toString(),
        description: "description " + i.toString(),
        content: "content " + i.toString(),
        authorId: adminId,
        id: postCount.data().count,
        tags: ["tag1, tag2, tag3"],
      });
    }
    console.log("Created Documents");
  } catch (error) {
    console.error("Error adding post:", error);
    return "error";
  }
};

addPosts();
