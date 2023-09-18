import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.addPostToAuthor = functions.firestore
  .document("posts/{postId}")
  .onCreate(async (snapshot, context) => {
    const postData = snapshot.data();
    const authorId = postData.authorId;
    const authorRef = admin.firestore().doc(`users/${authorId}`);
    const authorData = await getRefData(authorId);
    const updatedPosts = authorData?.posts || [];
    updatedPosts.push(context.params.postId);

    const ref = admin.firestore().collection("posts");
    const postCount = await ref.count().get();

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const postDocRef = snapshot.ref;
    await postDocRef.update({
      publish: false,
      date: currentDate,
      time: currentTime,
      authorId,
      id: postCount,
    });

    return await authorRef.set({ posts: updatedPosts }, { merge: true });
  });

/* 

  Gets the data from a document reference

  @param ref: admin.firestore.DocumentReference<admin.firestore.DocumentData> - The document reference to get data from
  @returns admin.firestore.DocumentData | undefined
  @example
    const authorRef = admin.firestore().doc(`users/${authorId}`);
    const authorData = await getRefData(authorId);
*/
const getRefData = async (
  ref: admin.firestore.DocumentReference<admin.firestore.DocumentData>
): Promise<admin.firestore.DocumentData | undefined> => {
  const authorSnap = await ref.get();
  return authorSnap.data();
};
