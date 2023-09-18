import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.parseTags = functions.firestore
  .document("posts/{postId}")
  .onCreate(async (snapshot, context) => {
    const postData = snapshot.data();
    const splitTags = postData.tags.split(",");
    postData.tags = splitTags;
    const postDocRef = snapshot.ref;
    await postDocRef.update({ tags: splitTags });
    return Promise.resolve("success");
  });

exports.addPostToAuthor = functions.firestore
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
    });

    return await authorRef.set({ posts: createdPosts }, { merge: true });
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
