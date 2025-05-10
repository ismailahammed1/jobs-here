import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/authProvider";
import { GrWorkshop } from "react-icons/gr";
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
        className="cursor-pointer overflow-hidden relative z-100 group px-4 py-2 md:px-8 block"
      >
        <span className="relative z-10 text-gray-200 group-hover:text-red-700 text-base md:text-sm duration-500">
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
    <div className="navbar shadow-sm bg-gray-500 px-4 md:px-8 lg:px-20">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiMenu className="text-white text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52"
          >
            {navItem}
            {!user && (
              <>
                <li>
                  <Link to="/login" className="text-white hover:text-red-700">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-white hover:text-red-700">
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center">
        <GrWorkshop className="h-8 w-8 md:h-10 md:w-10 text-red-700"  />
          
          <span className="text-xl md:text-2xl text-red-700 ml-2 font-bold">JobsHere</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>

      {/* Right Side - Desktop */}
      <div className="navbar-end gap-1 md:gap-3">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm w-24 md:w-auto bg-gray-400 placeholder-gray-200 text-white"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-8 md:w-10 rounded-full">
                  <img
                    alt="User profile"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="text-white hover:text-red-700">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="text-white hover:text-red-700">
                    Settings
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-white hover:text-red-700">
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
              className="cursor-pointer   text-white hover:text-red-600 overflow-hidden relative z-100 group px-3 py-2  text-sm duration-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="cursor-pointer btn bg-red-600 hover:bg-white-600 hover:text-gray-900 overflow-hidden relative z-100  px-3 py-2 text-white   text-sm duration-500"
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