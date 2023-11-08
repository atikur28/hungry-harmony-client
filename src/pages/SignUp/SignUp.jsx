import { Link, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const { createUser, loginInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    setSignUpError("");

    if (password.length < 6) {
      setSignUpError("Password should be in 6 character!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSignUpError(
        "Your password should have at least one upper case character!"
      );
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setSignUpError(
        "Your password should have at least one special character!"
      );
      return;
    }

    const user = { name, email, photo };

    createUser(email, password)
      .then((result) => {
        fetch("https://b8a11-server-side-atikur28.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        form.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.error(error);
          });
        Swal.fire("Good job!", "You have been registered..", "success");
        navigate("/");
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginInWithGoogle()
      .then((result) => {
        const name = result.displayName;
        const email = result.email;
        const photo = result.photoURL;
        const user = { name, email, photo };
        fetch("https://b8a11-server-side-atikur28.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire("Good job!", "You have successfully logged in..", "success");
        navigate("/");
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="md:w-3/5 md:mx-auto my-10 py-10 bg-pink-50 rounded mx-2">
        <h2 className="text-2xl font-bold text-center">Create your account</h2>
        <form onSubmit={handleSignUp} className="w-full">
          <div className="w-2/3 mx-auto mt-5">
            <h3 className="text-lg font-semibold mb-1">Your name</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Your name"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="w-2/3 mx-auto mt-5">
            <h3 className="text-lg font-semibold mb-1">Photo Url</h3>
            <input
              className="w-full py-1.5 px-2 rounded border border-gray-300"
              placeholder="Photo link"
              type="text"
              name="photo"
              required
            />
          </div>
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
              Sign Up
            </button>
          </div>
        </form>
        {signUpError && (
          <p className="text-red-600 font-semibold text-center">
            {signUpError}
          </p>
        )}
        <p className="w-2/3 mx-auto font-medium mt-3 text-gray-700 dark:text-gray-400">
          Have an account?{" "}
          <Link
            to="/signIn"
            className="font-medium text-sky-600 hover:underline"
          >
            Sign In
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
              Create with Google
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

export default SignUp;
