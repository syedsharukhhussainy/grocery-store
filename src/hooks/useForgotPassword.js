import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const useForgotPassword = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const forgotPassword = (email) => {
    setError(null);
    setIsPending(true);

    sendPasswordResetEmail(auth, email, {
      url: "https://localhost:3000/login",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { forgotPassword, error, isPending };
};
