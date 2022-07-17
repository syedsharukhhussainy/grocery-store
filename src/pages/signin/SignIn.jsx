import React, { useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useSignIn } from "../../hooks/useSignIn";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";
import { useForgotPassword } from "../../hooks/useForgotPassword";
import CustomAlert from "../../components/CustomAlert";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { signin, isPending, error } = useSignIn();

  const { googleSignIn, googleError, isGPending } = useGoogleSignIn();

  const { forgotPassword } = useForgotPassword();

  const handleSubmit = (event) => {
    event.preventDefault();
    signin(email, password);
  };

  useEffect(() => {
    if (error) {
      if (error && error.includes("user-not-found")) {
        setErrorMessage("Couldn't find you account");
      }
      if (error && error.includes("wrong-password")) {
        setErrorMessage("Wrong password. Try again");
      }
      setShowError(true);
    }

    return () =>
      setTimeout(() => {
        setShowError(false);
      }, 2000);
  }, [error]);

  return (
    <div className="min-h-full h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        <div>
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">Or</p>
          <div
            className="flex w-4/5 mx-auto items-center justify-center border border-orange-200 rounded-lg p-2 mt-2 hover:bg-orange-100 cursor-pointer"
            onClick={googleSignIn}
          >
            <BsGoogle />
            <p className="ml-2 ">Sign in with Google</p>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 mb-2  focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={password}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="showpassword"
                name="showpassword"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded  bg-orange-600 accent-orange-600"
                onChange={(event) =>
                  setShowPassword(event.currentTarget.checked)
                }
              />
              <label
                htmlFor="showpassword"
                className="ml-2 block text-sm text-gray-900"
              >
                Show Password
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending && isPending ? true : false}
              className="group relative w-full flex justify-center py-2 mt-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {isPending && isPending ? "Loading" : "Sign in"}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <p>Don't have account?</p>
            <Link to="/signup" className="text-orange-500 ml-1">
              Sign Up
            </Link>
          </div>
        </form>
        {showError && (
          <CustomAlert
            message={errorMessage}
            setShowError={(val) => setShowError(val)}
          />
          // <div
          //   className=" border border-red-400 text-red-700 px-4 py-3 rounded relative"
          //   role="alert"
          // >
          //   <strong className="font-bold text-sm mr-1">{errorMessage}</strong>
          //   {/* <span className="block sm:inline text-sm">
          //     Something seriously bad happened.
          //   </span> */}
          //   <span
          //     className="absolute top-0 bottom-0 right-0 px-4 py-3"
          //     onClick={() => setShowError(false)}
          //   >
          //     <svg
          //       className="fill-current h-6 w-6 text-red-500"
          //       role="button"
          //       xmlns="http://www.w3.org/2000/svg"
          //       viewBox="0 0 20 20"
          //     >
          //       <title>Close</title>
          //       <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          //     </svg>
          //   </span>
          // </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
