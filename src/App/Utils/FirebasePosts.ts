import { collection, addDoc } from "firebase/firestore";
import { Db } from "./Firebase";

export const addPost = async (title: string, body: string): Promise<void> => {
  await addDoc(collection(Db, "posts"), {
    title,
    body,
  });
};
