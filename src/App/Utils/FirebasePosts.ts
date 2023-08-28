import {
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  startAfter,
  limit,
  startAt,
} from "firebase/firestore";
import { Db, Auth } from "./Firebase";
import Post, { PostType } from "./Post";

export const addPost = async (
  title: string,
  description: string,
  content: string
): Promise<void> => {
  const usersRef = collection(Db, "users");
  const querySnapshot = await getDocs(
    query(usersRef, where("uid", "==", Auth.currentUser?.uid))
  );

  const userDoc = querySnapshot.docs[0];
  const userId = userDoc.id;

  await addDoc(collection(Db, "posts"), {
    title,
    description,
    content,
    authorId: userId,
  });
};

export const getPaginatedPosts = async (
  pageSize: number,
  startAfterDocId: number = 0
) => {
  const postRef = collection(Db, "posts");

  // Create a reference to the document to start after
  const startAfterDoc = await doc(postRef, startAfterDocId.toString());

  const querySnapshot = await getDocs(
    query(
      postRef,
      where("date", ">", startAfterDocId), // Use ">", not "date >"
      orderBy("date"),
      startAfter(startAfterDoc), // Use the document reference
      limit(pageSize)
    )
  );

  const posts: any = [];
  querySnapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });
  console.log(querySnapshot);
  return posts; // Output the fetched posts
};

export async function loadPosts(
  lastDoc: string | null,
  pageSize: number
): Promise<PostType[]> {
  const q = query(
    collection(Db, "posts"),
    orderBy("date"),
    startAt(lastDoc),
    limit(pageSize)
  );
  console.log("getting response");
  const querySnapshot = await getDocs(q);
  const res: PostType[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const newPost = new Post(data.title, data.description, data.content);
    res.push(newPost);
  });
  console.log("returning response");
  return Promise.resolve(res);
}
