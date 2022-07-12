import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/firebase.config";

const Home = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
