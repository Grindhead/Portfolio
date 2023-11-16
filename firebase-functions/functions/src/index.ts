import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

/*
  Adds the post to the author's posts

  @name handlePostAdded
*/
exports.handlePostAdded = functions.firestore
  .document("posts/{postId}")
  .onCreate(async (snapshot, context) => {
    const postData = snapshot.data();
    const authorId = postData.authorId;
    const authorRef = admin.firestore().doc(`users/${authorId}`);
    const authorData = (await authorRef.get()).data();
    const createdPosts = authorData?.posts || [];
    createdPosts.push(context.params.postId);
    const postDocRef = snapshot.ref;
    await postDocRef.set(
      {
        publish: "false",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        authorId,
        id: snapshot.id,
      },
      { merge: true }
    );

    return await authorRef.set({ posts: createdPosts }, { merge: true });
  });
