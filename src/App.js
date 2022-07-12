import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  const { isAuthReady, user } = useAuthContext();
  return (
    <div>
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
        </Routes>
      )}
    </div>
  );
}

export default App;