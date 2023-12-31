import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFood"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
        >
          All Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-sm md:text-2xl font-semibold md:font-bold">
          HungryHarmony
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-lg font-semibold flex gap-5">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center md:gap-3">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 md:w-10 rounded-full mx-auto">
                {user ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src="https://i.ibb.co/whSBfc4/user.png" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-bold bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/addedFood"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-700 underline"
                      : ""
                  }
                >
                  My Added Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addFood"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-700 underline"
                      : ""
                  }
                >
                  Add Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orderedFoods"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-700 underline"
                      : ""
                  }
                >
                  My Ordered Food
                </NavLink>
              </li>
            </ul>
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="text-sm md:text-base bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/signIn">
              <button className="text-sm md:text-base bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
