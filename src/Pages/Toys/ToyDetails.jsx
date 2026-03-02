import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { useAuth, useOrders } from "../../Provider/AuthProvider";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import GlobalLoader from "../../Components/GlobalLoader";

const ToyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toy, setToy] = useState(null);
  const { user } = useAuth();
  const {addOrder} = useOrders()
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [formLoading, setFormLoading] = useState(false);


  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

 
useEffect(() => {
  const fetchToyDetails = () => {
    setLoading(true);
    fetch("/toys_data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch toy data");
        }
        return response.json();
      })
      .then((data) => {
        const foundToy = data.find((t) => t.toyId === parseInt(id));

        if (foundToy) {
          setToy(foundToy);
        } else {
          navigate("/", { replace: true });
        }
      })
      .then(() => {
        setLoading(false);
      });
  };

  fetchToyDetails();
}, [id, navigate]);

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleTryNow = (e) => {
  e.preventDefault();
  setFormLoading(true);
  navigate("/my-order");
   addOrder(toy);

  new Promise((resolve) => setTimeout(resolve, 1000))
    .then(() => {
      toast.success(
        `Success! You've requested to add ${toy.toyName}. We'll contact you soon!`
      );

      setFormData({
        name: "",
        email: "",
      });
    })
    .then(() => {
      setFormLoading(false);
    });
};

  if (!toy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Toy Not Found
          </h2>
          <Link to="/" className="text-green-600 font-bold text-4xl hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <GlobalLoader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link
            to="/toy"
            className="flex gap-2 text-purple-800  hover:text-blue-600 font-semibold"
          >
            <FaArrowLeft className="mt-2" />{" "}
            <span className="text-xl">Back to All Toys</span>
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-1">
            <div className="flex gap-4 bg-white rounded-4xl shadow-lg overflow-hidden">
              <div className="bg-amber-200 max-auto  p-5">
                <img
                  src={toy.pictureURL}
                  className="rounded-xl "
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=Toy+Image+Not+Found";
                  }}
                />
              </div>
              <div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900 my-2">
                  Description
                </h3>
                <p className="text-gray-500 text-xl font-medium">
                  {toy.description}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {toy.toyName}
              </h1>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-2xl font-semibold text-pink-600">
                    €{toy.price.toFixed(2)}
                  </p>
                  <div className="flex items-center text-xl text-yellow-500">
                    <FaStar className="mr-1" />
                    <span className="font-medium text-gray-700">
                      {toy.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-2xl justify-between space-x-4 text-gray-600">
                  <span
                    className={` font-medium px-3 py-1 rounded-full ${
                      toy.availableQuantity > 10
                        ? "bg-amber-200 text-violet-500"
                        : toy.availableQuantity > 0
                        ? "bg-amber-700 text-red-400"
                        : "text-red-600"
                    }`}
                  >
                    {toy.availableQuantity > 0 ? (
                      <span className="font-medium ">
                        In Stock (
                        <span className="font-bold text-2xl text-green-500">
                          {toy.availableQuantity}
                        </span>
                        )
                      </span>
                    ) : (
                      "Out of Stock"
                    )}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {toy.subCategory}
                  </span>
                </div>

                <div className="border-t border-fuchsia-500">
                  <h3 className="text-3xl font-semibold text-blue-900 mb-2">
                    Seller Information
                  </h3>
                  <div className="space-y-2">
                    <p className="text-2xl text-amber-700">
                      <strong className="text-green-500">Seller:</strong>{" "}
                      {toy.sellerName}
                    </p>
                    <p className="text-2xl text-amber-700">
                      <strong className="text-violet-500">Email:</strong>{" "}
                      {toy.sellerEmail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-2xl shadow-lg p-6 h-fit sticky top-8">
            <h2 className="text-4xl text-center font-bold text-pink-900 mb-6">
              Try This Toy Now
            </h2>

            <form onSubmit={handleTryNow} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl font-medium  mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={loading}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500  transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xl font-medium  mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={loading}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500  transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
                <button
                  type="submit"
                  disabled={formLoading || toy.availableQuantity === 0}
                  className="w-full bg-green-500  border-none rounded-lg hover:bg-gradient-to-br from-[#632ee3] to-[#9f62f2] btn text-white py-3 px-6  font-semibold"
                >
                  {formLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing now...
                    </div>
                  ) : (
                    `Get It Now`
                  )}
                </button>
              

              {toy.availableQuantity === 0 && (
                <p className="text-red-600 text-4xl text-center">
                  This toy is currently out of stock. Please check back later.
                </p>
              )}
            </form>

            <div className="mt-4">
              <p className="text-xl ">
                <strong>Logged in as :</strong>{" "}
                <span className="text-amber-500">
                  {" "}
                  {user?.displayName || user?.email}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
