import {
  doc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAt,
} from "firebase/firestore";
import { Db, Auth } from "./Firebase";
import { PostType } from "./Post";

export const addPost = async (
  title: string,
  description: string,
  content: string,
  tags: string
): Promise<string> => {

  if(!Auth.currentUser) {
    throw new Error("No CurrentUser");
  }

  const usersRef = collection(Db, "users");
  const querySnapshot = await getDocs(
    query(usersRef, where("uid", "==", Auth.currentUser?.uid))
  );

  const userDoc = querySnapshot.docs[0];

  if(!userDoc) {
    throw new Error("No User Doc Found for " + Auth.currentUser?.uid);
  }

  const userId = userDoc?.id;

  await addDoc(collection(Db, "posts"), {
    title,
    description,
    content,
    authorId: userId,
    tags,
    tagList: tags.split(","),
  }).then((docRef) => {
    return Promise.resolve(docRef.id);
  });
  return Promise.resolve("error");
};

export const loadPost = async (id: string): Promise<PostType> => {
  const q = query(collection(Db, "posts"), where("id", "==", id));
  const docSnap = await getDocs(q);
  console.log("loading", id);
  const res = docSnap.forEach((doc) => {
    console.log(doc.data(), id);
  });

  return Promise.resolve(res as unknown as PostType);
};

export const getCountByTag = async (tag: string): Promise<number> => {
  const q = query(
    collection(Db, "posts"),
    orderBy("id"),
    where("tagList", "array-contains", tag)
  );

  const querySnapshot = await getDocs(q);
  return Promise.resolve(querySnapshot.size);
};

export const loadPostsByTag = async (
  tag: string,
  lastDoc: number | null,
  pageSize: number
): Promise<PostType[]> => {
  const q = query(
    collection(Db, "posts"),
    orderBy("id"),
    where("tagList", "array-contains", tag),
    startAt(lastDoc),
    limit(pageSize)
  );

  const querySnapshot = await getDocs(q);
  const res: PostType[] = [];

  querySnapshot.forEach((doc) => {
    res.push(doc.data() as PostType);
  });

  return Promise.resolve(res);
};

export async function loadAllPostsFromCollection(
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
    res.push(doc.data() as PostType);
  });

  return Promise.resolve(res);
}
