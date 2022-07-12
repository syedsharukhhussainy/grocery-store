import { useState } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAuthContext } from "./useAuthContext";

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const signin = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "SIGN_IN", payload: res.user });
        setError(null);
        setIsPending(false);
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.message);
        setIsPending(false);
      });
  };

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email).then((res) => {
      console.log(res);
    });
  };
  return { forgotPassword, signin, error, isPending };
};
