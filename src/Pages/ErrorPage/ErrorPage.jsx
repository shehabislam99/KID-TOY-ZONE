import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo';
import errorr from "../../assets/Error.webp"
import GlobalLoader from '../../Components/GlobalLoader';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
     <GlobalLoader/>
      <div className="max-w-auto w-full text-center">
        <div className="mb-8">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="mb-8">
          <div className="relative inline-block">
            <div className=" flex items-center justify-center mx-auto mb-4">
              <img src={errorr} className="w-60 h-60 rounded-full" alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for that's seems to not here! Don't worry,
            let's get you back to playing.
          </p>
          <div className="inline gap-7">
            <Link
              to="/"
              className=" bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 "
            >
              Go Back to Home
            </Link>

            <Link
              to="/all-toys"
              className="ml-5 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700"
            >
              Browse All Toys
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Need help?{" "}
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default ErrorPage;