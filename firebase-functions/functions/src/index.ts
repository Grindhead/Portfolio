import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.addPostToAuthor = functions.firestore
  .document("posts/{postId}")
  .onCreate(async (snapshot, context) => {
    const postData = snapshot.data();
    const authorId = postData.authorId;
    const authorRef = admin.firestore().doc(`users/${authorId}`);
    const authorSnap = await authorRef.get();
    const authorData = authorSnap.data();
    const updatedPosts = authorData?.posts || [];
    updatedPosts.push(context.params.postId);
    return await authorRef.set({posts: updatedPosts}, {merge: true});
  });
