import { Link, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const [signInError, setSignInError] = useState("");
  const { login, loginInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setSignInError("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        Swal.fire("Good job!", "You clicked the button!", "success");
        navigate("/");
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "You have successfully logged in..", "success");
        navigate("/");
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="md:w-3/5 md:mx-auto my-10 py-10 bg-pink-50 rounded mx-2">
        <h2 className="text-2xl font-bold text-center">
          Sign In to your account
        </h2>
        <form onSubmit={handleSignIn} className="w-full">
          <div className="w-2/3 mx-auto mt-5">
            <h3 className="text-lg font-semibold mb-1">Your email</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="w-2/3 mx-auto mt-3">
            <h3 className="text-lg font-semibold mb-1">Password</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Password"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="w-2/3 mx-auto mt-7">
            <button className="bg-gray-700 text-white font-bold md:text-lg w-full rounded py-1.5">
              Sign In
            </button>
          </div>
        </form>
        {signInError && (
          <p className="text-red-600 font-semibold text-center">
            {signInError}
          </p>
        )}
        <p className="w-2/3 mx-auto font-medium mt-3 text-gray-700 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            to="/signUp"
            className="font-medium text-sky-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <div className="w-max border mx-auto bg-white rounded-full mt-9 hover:bg-slate-100">
          <Link>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-3 font-semibold py-2 w-[300px]"
            >
              <img
                className="w-5"
                src="https://i.ibb.co/Pj0MgcP/google.png"
                alt=""
              />{" "}
              Sign In with Google
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SignIn;
