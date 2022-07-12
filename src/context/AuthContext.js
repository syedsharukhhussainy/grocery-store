import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/firebase.config";

let initialState = {
  user: null,
  isAuthReady: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, user: action.payload };
    case "SIGN_IN":
      return { ...state, user: action.payload };
    case "GOOGLE_SIGN_IN":
      return { ...state, user: action.payload };
    case "IS_AUTH_READY":
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log(state);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "IS_AUTH_READY", payload: user });
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
