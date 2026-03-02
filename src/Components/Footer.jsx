import React from 'react';
import { Link } from 'react-router';
import Logo from './Logo';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-purple-800 to-red-600 py-8">
        <div className="container mx-auto px-5 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="hover:text-black hover:underline text-2xl font-bold text-blue-500 mb-4 inline-block"
              >
                <Logo></Logo>
              </Link>
              <p className="font-semibold mb-4 max-w-sm">
                Your trusted local toy marketplace. Connecting families with
                quality toys from local sellers. Making playtime magical while
                supporting small businesses in your community.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Links*/}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C8.396 0 7.987 0.021 6.762 0.106 5.534 0.191 4.705 0.437 3.992 0.81 3.255 1.195 2.641 1.7 2.132 2.38 1.628 3.055 1.225 3.89 0.935 4.817 0.645 5.749 0.46 6.777 0.386 7.948 0.311 9.119 0.285 9.62 0.285 12.017C0.285 14.416 0.311 14.914 0.386 16.085 0.46 17.258 0.645 18.285 0.935 19.219 1.225 20.148 1.628 20.982 2.132 21.656 2.641 22.337 3.255 22.842 3.992 23.227 4.705 23.6 5.534 23.846 6.762 23.931 7.987 24.016 8.396 24.037 12.017 24.037C15.64 24.037 16.048 24.016 17.273 23.931 18.501 23.846 19.33 23.6 20.042 23.227 20.779 22.842 21.393 22.337 21.902 21.656 22.406 20.982 22.809 20.148 23.099 19.219 23.389 18.285 23.574 17.258 23.648 16.085 23.723 14.914 23.749 14.416 23.749 12.017C23.749 9.62 23.723 9.119 23.648 7.948 23.574 6.777 23.389 5.749 23.099 4.817 22.809 3.89 22.406 3.055 21.902 2.38 21.393 1.7 20.779 1.195 20.042 0.81 19.33 0.437 18.501 0.191 17.273 0.106 16.048 0.021 15.64 0 12.017 0zM12.017 2.158C15.412 2.158 15.776 2.176 16.98 2.259 18.117 2.337 18.773 2.575 19.238 2.77 19.855 3.029 20.301 3.345 20.774 3.818 21.247 4.291 21.563 4.737 21.822 5.354 22.017 5.819 22.255 6.475 22.333 7.612 22.416 8.816 22.434 9.18 22.434 12.575 22.434 15.97 22.416 16.334 22.333 17.538 22.255 18.675 22.017 19.331 21.822 19.796 21.563 20.413 21.247 20.859 20.774 21.332 20.301 21.805 19.855 22.121 19.238 22.38 18.773 22.575 18.117 22.813 16.98 22.891 15.776 22.974 15.412 22.992 12.017 22.992 8.622 22.992 8.258 22.974 7.054 22.891 5.917 22.813 5.261 22.575 4.796 22.38 4.179 22.121 3.733 21.805 3.26 21.332 2.787 20.859 2.471 20.413 2.212 19.796 2.017 19.331 1.779 18.675 1.701 17.538 1.618 16.334 1.6 15.97 1.6 12.575 1.6 9.18 1.618 8.816 1.701 7.612 1.779 6.475 2.017 5.819 2.212 5.354 2.471 4.737 2.787 4.291 3.26 3.818 3.733 3.345 4.179 3.029 4.796 2.77 5.261 2.575 5.917 2.337 7.054 2.259 8.258 2.176 8.622 2.158 12.017 2.158zM12.017 5.838C8.609 5.838 5.838 8.609 5.838 12.017C5.838 15.425 8.609 18.196 12.017 18.196C15.425 18.196 18.196 15.425 18.196 12.017C18.196 8.609 15.425 5.838 12.017 5.838zM12.017 16.006C9.767 16.006 8.028 14.267 8.028 12.017C8.028 9.767 9.767 8.028 12.017 8.028C14.267 8.028 16.006 9.767 16.006 12.017C16.006 14.267 14.267 16.006 12.017 16.006zM19.831 5.595C19.831 6.237 19.319 6.749 18.677 6.749C18.035 6.749 17.523 6.237 17.523 5.595C17.523 4.953 18.035 4.441 18.677 4.441C19.319 4.441 19.831 4.953 19.831 5.595z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Nav links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Quick Links
              </h3>
              <ul className="space-y-2 font-medium">
                <li>
                  <Link to="/" className="hover:text-green-500 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-profile"
                    className=" hover:text-green-500 hover:underline"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/toy"
                    className="hover:text-green-500 hover:underline"
                  >
                    All Toys
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal  */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-500">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-green-500 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-conditions"
                    className="hover:text-green-500 hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="hover:text-green-500 hover:underline"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/return-policy"
                    className="hover:text-green-500 hover:underline"
                  >
                    Return Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {/* Support & Queries */}
              <ul>
                <h3 className="text-lg font-semibold mb-4 text-blue-500">
                  Support & Queries
                </h3>

                <li>
                  <Link
                    to="/about"
                    className="hover:text-green-500 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-green-500 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-green-500 hover:underline"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center font-semibold">
          © {new Date().getFullYear()} KID TOY ZONE. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;