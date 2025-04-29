import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/login.json";
import React, { useContext } from 'react';
import { AuthContext } from "../../Contexts/authProvider";

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const handelLogin=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>console.log("login data",result.user))
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:flex lg:items-center lg:justify-center lg:w-5/12 bg-cover rounded-l-lg">
              <Lottie 
                animationData={animationData} 
                style={{ height: 300, width: 300 }}
                loop
                autoplay
              />
            </div>
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Sign In to Your Account
              </h3>
              <form onSubmit={handelLogin} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="password"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    to="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    to="/register"
                  >
                    Create an account? Register!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;