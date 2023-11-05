import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const SignUp = () => {
  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="md:w-3/5 md:mx-auto my-10 py-10 bg-pink-50 rounded mx-2">
        <h2 className="text-2xl font-bold text-center">Create your account</h2>
        <form className="w-full">
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
        <p className="w-2/3 mx-auto font-medium mt-3 text-gray-700 dark:text-gray-400">
          Have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-sky-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
        <div className="w-max border mx-auto bg-white rounded-full mt-9 hover:bg-slate-100">
          <Link>
            <button className="flex items-center justify-center gap-3 font-semibold py-2 w-[300px]">
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
