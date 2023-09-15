import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { deletePosts} from './deletePosts.mjs';
import config from '../id.json' assert { type: 'json' };

const serviceAccount = JSON.parse(readFileSync("../key.json", 'utf-8'));

export const app = await admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-71c20.firebaseio.com",
});

export const db = admin.firestore();

export const addPosts = async () => {
  try {

    await deletePosts();

    const adminId = config.id;
    const postsRef = db.collection("posts");

    for (var i = 0; i < 30; i++) {
      const postCount = await postsRef.count().get()
      const newPostRef = await postsRef.add({
        title: "title " + i.toString(),
        description: "description " + i.toString(),
        content: "content " + i.toString(),
        authorId: adminId,
        id: postCount.data().count
      });
    }
    console.log("Created Documents");
  } catch (error) {
    console.error("Error adding post:", error);
    return "error";
  }
};

addPosts();