import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

/*
  Adds the post to the author's posts array and splits the tags into an array

  @name handlePostAdded
*/
exports.handlePostAdded = functions.firestore
  .document("posts/{postId}")
  .onCreate(async (snapshot, context) => {
    const postData = snapshot.data();
    const authorId = postData.authorId;
    const authorRef = admin.firestore().doc(`users/${authorId}`);
    const authorData = await getRefData(authorId);
    const createdPosts = authorData?.posts || [];
    createdPosts.push(context.params.postId);

    const ref = admin.firestore().collection("posts");
    const postCount = await ref.count().get();
    const postDocRef = snapshot.ref;
    await postDocRef.update({
      publish: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      authorId,
      id: postCount,
      tagList: postData.tags.split(","),
    });

    return await authorRef.set({ posts: createdPosts }, { merge: true });
  });

/* 

  Gets the data from a document reference

  @name getRefData
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
