import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { readFileSync } from "fs";

export const init = async () => {
  console.log("Initializing Firebase");
  const serviceAccount = JSON.parse(readFileSync("../key.json", "utf-8"));
  await initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-71c20.firebaseio.com",
  });
};

// export const db = admin.firestore();
