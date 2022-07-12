import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        dispatch({ type: "SIGN_UP", payload: res.user });
        setError(null);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.code);
        setIsPending(false);
      });
  };

  return { signup, error, isPending };
};
