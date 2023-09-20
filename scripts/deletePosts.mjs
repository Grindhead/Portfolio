import { deleteCollection } from "./deleteCollection.mjs";

const collectionName = "posts";

export const deletePosts = async () =>
  await deleteCollection(collectionName, 100000)
    .then(() => {
      console.log(`Collection "${collectionName}" successfully deleted.`);
    })
    .catch((error) => {
      console.error(`Error deleting collection: ${error}`);
    });
