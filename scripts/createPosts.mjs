import admin from "firebase-admin";
import { readFileSync } from "fs";
import { deletePosts } from "./deletePosts.mjs";
import config from "../../id.json" assert { type: "json" };

const serviceAccount = JSON.parse(readFileSync("../key.json", "utf-8"));

export const app = await admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-71c20.firebaseio.com",
});

export const db = admin.firestore();

export const addPosts = async () => {
  try {
    await deletePosts();
    for (let i = 1; i <= 30; i++) {
      await setTimeout(async () => await createPost(i), i * 2000);
    }
  } catch (error) {
    console.error("Error adding post:", error);
    return "error";
  }
};

const createPost = async (i) => {
  const adminId = config.id;
  const postsRef = db.collection("posts");
  const tags = "tag1, tag2, tag3";

  await postsRef.add({
    title: "title " + i.toString(),
    description: "description " + i.toString(),
    content: "content " + i.toString(),
    authorId: adminId,
    id: i,
    tags,
    tagList: tags.split(","),
  });
};

addPosts();
