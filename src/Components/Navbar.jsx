import React from 'react';
import { useAuth } from '../Provider/AuthProvider';
import { Link, NavLink } from "react-router-dom";
import imgs from "../assets/images.jpeg";
import Logo from './Logo';
import toast from 'react-hot-toast';

const Navbar = () => {
     const { user, logout } = useAuth();

    const handleLogout = () => {
      logout()
        .then(() => {
          toast.success("Oops..Logged Out!");
        })
        
    };

      const links = (
        <>
          <li>
            <a className="flex items-center space-x-6 ">
              <NavLink to="/" className="hover:text-green-500 hover:underline">
                Home
              </NavLink>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-6 ">
              {" "}
              <NavLink
                to="/my-profile"
                className="hover:text-green-500 hover:underline"
              >
                Profile
              </NavLink>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-6 ">
              <NavLink
                to="/toy"
                className="hover:text-green-500 hover:underline"
              >
                All Toys
              </NavLink>
            </a>
          </li>
        </>
      ); 

        return (
          <nav className="navbar px-4 md:px-12 bg-gradient-to-r from-purple-800 to-red-600 shadow-sm justify-between  ">
            <div className="flex gap-1 ">
              <div className="dropdown flex gap-2 items-center py-4">
                <div tabIndex={0} role="button">
                  <div className="flex gap-1">
                    <img
                      src={imgs}
                      className="w-7 h-7 mt-1 rounded-full"
                      alt=""
                    />
                    <Logo></Logo>
                  </div>
                </div>
                <ul
                  tabIndex={-2}
                  className="font-semibold menu menu-sm dropdown-content bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-box z-1 mt-3 w-52 p-2 shadow  lg:hidden"
                >
                  {links}
                </ul>
              </div>
            </div>
            <div className=" hidden lg:flex  ">
              <ul className="flex justify-between gap-8 mr-20 font-semibold">
                {links}
              </ul>
            </div>{" "}
            <div>
              {user ? (
                <div className="flex item-center gap-4">
                  <Link to="/my-profile">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/40"}
                      alt="user"
                      title={user.displayName || user.email}
                      className="w-10 h-10 justify-center rounded-full"
                    />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-green-500  border-none rounded-lg  btn px-8 py-4 text-white hover:bg-gradient-to-br from-[#632ee3] to-[#9f62f2]"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-green-500  border-none rounded-lg text-white hover:bg-gradient-to-br from-[#632ee3] to-[#9f62f2] btn px-8 py-4 ">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </nav>
        );
}

export default Navbar;