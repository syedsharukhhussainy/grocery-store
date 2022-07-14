import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);
    setIsPending(true);

    signOut(auth)
      .then(() => {
        setError(null);
        setIsPending(false);
        dispatch({ type: "LOG_OUT" });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return { logout, error, isPending };
};
