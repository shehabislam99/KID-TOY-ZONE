import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ToyCard = ({ toy }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden  hover:shadow-xl transition duration-300">
      <img
        src={toy.pictureURL}
        alt={toy.toyName}
        className="w-full h-56 p-4 rounded-4xl object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{toy.toyName}</h3>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-semibold text-pink-600">
            €{toy.price.toFixed(2)}
          </p>
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className="font-medium text-gray-700">{toy.rating}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span
            className={`text-sm font-medium ${
              toy.availableQuantity > 10
                ? "text-violet-500"
                : toy.availableQuantity > 0
                ? "text-red-400"
                : "text-red-600"
            }`}
          >
            {toy.availableQuantity > 0 ? (
              <span className="font-medium">
                In Stock (
                <span className="font-bold text-[15px] text-green-500">
                  {toy.availableQuantity}
                </span>
                )
              </span>
            ) : (
              "Out of Stock"
            )}
          </span>
          <button>
            <Link
              to={`/toy/${toy.toyId}`}
              className="bg-green-500  hover:bg-gradient-to-br from-purple-500 to-red-500 hover:shadow-xl text-white p-3 py-2 rounded-lg text-sm font-semibold transition"
            >
              View More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
