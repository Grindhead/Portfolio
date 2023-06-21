import { User, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "./Firebase";

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
