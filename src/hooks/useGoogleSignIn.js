import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAuthContext } from "./useAuthContext";

export const useGoogleSignIn = () => {
  const [googleError, setGoogleError] = useState(null);
  const [isGPending, setIsGPending] = useState(false);

  const { dispatch } = useAuthContext();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setGoogleError(null);
    setIsGPending(true);

    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({ type: "GOOGLE_SIGN_IN", payload: res.user });
        setGoogleError(null);
        setIsGPending(false);
      })
      .catch((err) => {
        setGoogleError(err.code);
        setIsGPending(false);
      });
  };

  return { googleSignIn, isGPending, googleError };
};
