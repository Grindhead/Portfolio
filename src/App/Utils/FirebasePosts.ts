import {
  doc,
  collection,
  addDoc,
  getDoc,
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
): Promise<string> => {
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
  }).then((docRef) => {
    return Promise.resolve(docRef.id);
  });
  return Promise.resolve("error");
};

export const getPaginatedPosts = async (
  pageSize: number,
  startAfterDocId: number = 0
) => {
  const postRef = collection(Db, "posts");
  const startAfterDoc = await doc(postRef, startAfterDocId.toString());

  const querySnapshot = await getDocs(
    query(
      postRef,
      where("date", ">", startAfterDocId),
      orderBy("date"),
      startAfter(startAfterDoc),
      limit(pageSize)
    )
  );

  const posts: any = [];
  querySnapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });

  return posts;
};

export const loadPost = async (id: string): Promise<PostType> => {
  const docRef = doc(Db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return Promise.resolve(docSnap.data() as PostType);
  } else {
    console.log("No such document!");
  }
};

export async function loadPosts(
  lastDoc: number | null,
  pageSize: number
): Promise<PostType[]> {
  const q = query(
    collection(Db, "posts"),
    orderBy("id"),
    startAt(lastDoc),
    limit(pageSize)
  );

  const querySnapshot = await getDocs(q);
  const res: PostType[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const newPost = new Post(
      data.title,
      data.description,
      data.content,
      doc.id
    );
    res.push(newPost);
  });

  return Promise.resolve(res);
}
