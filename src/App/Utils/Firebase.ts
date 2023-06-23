import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// delete for prod use.
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { connectFirestoreEmulator } from "firebase/firestore";
import { getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACnI8oIQlZ_FAMk16fbsIsWu2aQFyiSqU",
  authDomain: "portfolio-71c20.firebaseapp.com",
  databaseURL:
    "https://portfolio-71c20-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-71c20",
  storageBucket: "portfolio-71c20.appspot.com",
  messagingSenderId: "186684086013",
  appId: "1:186684086013:web:ee2c2c0df7e4ded6ffd094",
  measurementId: "G-RN0TG03MQH",
};

export const App = initializeApp(firebaseConfig);
export const Analytics = getAnalytics(App);
export const Auth = getAuth(App);
export const Db = getFirestore(App);

// const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);
// connectFirestoreEmulator(Db, "127.0.0.1", 8080);
