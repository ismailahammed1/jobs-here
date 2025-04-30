import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/authProvider";
import jobs from "../../../assets/Icon/jobs-64.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },

  ];

  const navItem = navItems.map((item, index) => (
    <li key={index}>
      <Link
        to={item.path}
        className="cursor-pointer overflow-hidden relative z-100 group px-8 py-2 block"
      >
        <span className="relative z-10 text-gray-200 group-hover:text-red-700 text-lg duration-500">
          {item.name}
        </span>
        <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
        <span className="absolute top-0 right-0 w-8 h-0.5 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        <span className="absolute bottom-0 left-0 w-0.5 h-8 bg-red-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
        <span className="absolute top-0 right-0 w-0.5 h-8 bg-red-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
      </Link>
    </li>
  ));

  return (
    <div className="navbar shadow-sm bg-gray-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost">
        <img src={jobs} alt="" className="h-10 w-10" />
          <span className=" text-2xl text-red-700">JobsHere</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search" 
              className="input input-bordered w-24 md:w-auto" 
            />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User profile"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 gap-1 shadow"
              >
                <li>
                  <Link to="/profile" className="hover:text-red-700">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="hover:text-red-700">
                    Settings
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:text-red-700">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="cursor-pointer btn bg-red-600 text-gray-900 hover:text-white overflow-hidden relative z-100 group px-3 py-2 border-2 border-red-700 outline-red-900 group-hover:text-red-700 text-lg duration-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="cursor-pointer btn hover:bg-red-600 overflow-hidden relative z-100 group px-3 py-2 text-red-700 border-2 border-red-700 outline-red-900 hover:text-gray-900 text-lg duration-500"
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;