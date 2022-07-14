import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  const { isAuthReady, user } = useAuthContext();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-screen flex flex-col bg-primary">
        {isAuthReady && (
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/signin" />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <SignUp />}
            />
            <Route
              path="/signin"
              element={user ? <Navigate to="/" /> : <SignIn />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        )}
      </div>
    </AnimatePresence>
  );
}

export default App;
