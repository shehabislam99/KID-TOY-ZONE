import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { useAuth } from "../../Provider/AuthProvider";
import GlobalLoader from "../../Components/GlobalLoader";

const Profile = () => {
  const { user} = useAuth();
  const [profileData, setProfileData] = useState({
    displayName: "",
    email: "",
    phone: "",
    address: "",
    photoURL: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        displayName: user.displayName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);


  return (
    <div>
      <div className="min-h-screen bg-gray-200 py-8">
        <GlobalLoader />
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-black">My Profile</h1>
            <p className="text-2xl font-semibold text-gray-700 mt-3">
              Your account information
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="col-span-1">
              <div className="bg-white rounded-2xl shadow-lg px-5 py-10 sticky top-8">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={profileData.photoURL || "/default-avatar.png"}
                      className="w-32 h-32 rounded-full object-cover border-4 border-green-300"
                    />

                    <active className="absolute bottom-3 right-2 bg-green-600 p-2 rounded-full hover:bg-gray-500"></active>
                  </div>
                  <h2 className="text-2xl font-bold text-red-400 mt-4">
                    {profileData.displayName || "User"}
                  </h2>
                  <p className="text-blue-600">{profileData.email}</p>
                </div>

                <div className="col-span-3">
                  <div className="flex justify-center">
                    <h3 className="font-semibold text-gray-900">
                      Last Login Date :
                    </h3>
                    <p className="ml-2 text-violet-700">
                      {user.metadata?.lastSignInTime
                        ? new Date(
                            user.metadata.lastSignInTime
                          ).toLocaleDateString()
                        : "Recently"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-white p-10 rounded-2xl shadow-lg ">
                <h2 className="text-2xl text-center font-bold text-black mb-6">
                  Personal Information
                </h2>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="photoURL"
                      className=" text-sm font-medium text-black mb-2"
                    >
                      Profile Photo URL
                    </label>
                    <input
                      type="url"
                      id="photoURL"
                      name="photoURL"
                      value={profileData.photoURL}
                      className="w-full px-4 py-3 border text-green-700 border-gray-300 rounded-lg"
                      placeholder="https://example.com/your-photo.jpg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="displayName"
                      className=" text-sm font-medium text-black mb-2 flex items-center"
                    >
                      <FaUser className="mr-2 text-gray-400" />
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="displayName"
                      name="displayName"
                      required
                      value={profileData.displayName}
                      className="w-full px-4 py-3 border border-gray-300  text-green-700 rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className=" text-sm font-medium text-black mb-2 flex items-center"
                    >
                      <FaEnvelope className="mr-2 text-gray-400" />
                      Email Address
                    </label>
                    <p className="w-full px-4 py-3 border border-gray-300  text-green-700 rounded-lg">
                      {profileData.email}
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className=" text-sm font-medium text-black mb-2 flex items-center"
                    >
                      <FaPhone className="mr-2 text-gray-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      className="w-full px-4 py-3 border border-gray-300  text-green-700 rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <label
                    htmlFor="address"
                    className=" text-sm font-medium text-black mb-2 flex items-center"
                  >
                    <FaMapMarkerAlt className="mr-2 text-gray-400" />
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={profileData.address}
                    className="w-full px-4 py-3 border border-gray-300  text-green-700 rounded-lg"
                    placeholder="Enter your address"
                  />

                  <div>
                    <label className=" text-sm font-medium text-black flex items-center mb-2">
                      User ID
                    </label>
                    <p className="w-full px-4 py-3 border border-gray-300  text-green-700 rounded-lg">
                      {user.uid}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
