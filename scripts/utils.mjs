import admin from "firebase-admin";
import { readFileSync } from "fs";

const serviceAccount = JSON.parse(readFileSync("../key.json", "utf-8"));
export const db = admin.firestore();

export const app = await admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-71c20.firebaseio.com",
});
