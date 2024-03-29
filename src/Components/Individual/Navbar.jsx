/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLogin = () => {};

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "dark:text-white text-black px-3 py-1 border-y-4 border-purple-700 dark:border-purple-300 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-purple-700 dark:hover:text-purple-400"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "dark:text-white text-black px-3 py-1 border-y-4 border-purple-700 dark:border-purple-300 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-purple-700 dark:hover:text-purple-400"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/features"
        className={({ isActive }) =>
          isActive
            ? "dark:text-white text-black px-3 py-1 border-y-4 border-purple-700 dark:border-purple-300 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-purple-700 dark:hover:text-purple-400"
        }
      >
        Features
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          isActive
            ? "dark:text-white text-black px-3 py-1 border-y-4 border-purple-700 dark:border-purple-300 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-purple-700 dark:hover:text-purple-400"
        }
      >
        About Us
      </NavLink>
    </>
  );

  const dropdownLinks = (
    <>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-slate-300 dark:bg-slate-600 text-white py-1"
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-purple-800 dark:text-purple-300 font-bold underline"
              : "px-2 font-medium rounded-md text-purple-700 dark:text-purple-100"
          }
        >
          Home
        </NavLink>
      </span>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-slate-300 dark:bg-slate-600 text-white py-1"
        }
      >
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-purple-800 dark:text-purple-300 font-bold underline"
              : "px-2 font-medium rounded-md text-purple-700 dark:text-purple-100"
          }
        >
          Dashboard
        </NavLink>
      </span>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-slate-300 dark:bg-slate-600 text-white py-1"
        }
      >
        <NavLink
          to="/features"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-purple-800 dark:text-purple-300 font-bold underline"
              : "px-2 font-medium rounded-md text-purple-700 dark:text-purple-100"
          }
        >
          Features
        </NavLink>
      </span>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-slate-300 dark:bg-slate-600 text-white py-1"
        }
      >
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-purple-800 dark:text-purple-300 font-bold underline"
              : "px-2 font-medium rounded-md text-purple-700 dark:text-purple-100"
          }
        >
          About Us
        </NavLink>
      </span>
    </>
  );

  return (
    <div className="navbar sticky z-50 top-0 bg-opacity-90 bg-white dark:opacity-80 shadow-lg w-full dark:bg-slate-900 dark:text-white lg:px-12 mx-auto md:py-3">
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setOpen(!open)}>
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
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg dark:bg-slate-700 w-52`}
          >
            {dropdownLinks}
          </ul>
        </div>

        <Link to="/" className="text-xl">
          <span className="flex items-center">
            <img
              src="https://i.ibb.co/QdqtDs7/management.png"
              className="w-10 md:w-10 mr-1"
            />
            <span className="font-medium font-logoFont dark:text-white text-sm md:text-xl lg:text-2xl">
              Swift
              <span className="text-purple-600 dark:text-purple-300">cart</span>
            </span>
          </span>
        </Link>
      </div>

      {/* Center Content */}
      <div className="navbar-center hidden lg:flex">{links}</div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div className="flex items-center">
          {/* <img
              className="w-7 lg:w-10 h-7 lg:h-10 rounded-full mr-3"
              src="https://i.ibb.co/By0YFNn/default-profile-picture-grey-male-icon.png"
              alt=""
            /> */}
          <button
            onClick={handleLogin}
            className="px-2 py-0.5 duration-150 ease-in-out text-sm lg:text-base lg:px-5 lg:py-2 border-2 border-purple-500 hover:bg-purple-500 hover:text-white rounded-md"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
