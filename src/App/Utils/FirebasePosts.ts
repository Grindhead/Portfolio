import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { Db, Auth } from "./Firebase";

export const addPost = async (title: string, body: string): Promise<void> => {
  const usersRef = collection(Db, "users");
  const querySnapshot = await getDocs(
    query(usersRef, where("uid", "==", Auth.currentUser?.uid))
  );

  const userDoc = querySnapshot.docs[0];
  const userId = userDoc.id;

  await addDoc(collection(Db, "posts"), {
    title,
    body,
    authorId: userId,
  });
};
