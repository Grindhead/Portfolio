import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, User, signInWithEmailAndPassword } from "firebase/auth";

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

export const emailAndPassword = async (
  email: string,
  password: string
): Promise<User | Error> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      Auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return error;
  }
};
