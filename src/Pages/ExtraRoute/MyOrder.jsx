import React, { useState} from "react";
import {  useOrders } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaBox, FaCheckCircle, FaClock, FaEye, FaTrash } from "react-icons/fa";
import GlobalLoader from "../../Components/GlobalLoader";
import toast from "react-hot-toast";

const MyOrders = () => {
  const { orders, removeOrder } = useOrders();
  const [orderToDelete, setOrderToDelete] = useState(null);

  const handleDelete = () => {
    removeOrder(orderToDelete);
    setOrderToDelete(null);
    toast.success("Order deleted successfully!");
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <FaCheckCircle className="text-green-500" />;
      case "in-progress":
        return <FaClock className="text-blue-500" />;
      case "pending":
        return <FaClock className="text-yellow-500" />;
      default:
        return <FaBox className="text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "in-progress":
        return "In Progress";
      case "pending":
        return "Pending";
      default:
        return "Unknown";
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <GlobalLoader />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-black">My Orders</h1>
          <p className="text-gray-600 text-2xl font-semibold mt-4">
            Your toy requests
          </p>
        </div>

        <div className="bg-amber-200 rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              (<span className="text-green-400">{orders.length}</span>) Order
              {orders.length !== 1 ? "s" : ""}
            </h2>
            <Link
              to="/toy"
              className="px-4 py-2 bg-green-500 border-none rounded-lg text-white hover:bg-gradient-to-br from-[#632ee3] to-[#9f62f2] btn"
            >
              Browse All Toys
            </Link>
          </div>
        </div>
        {orderToDelete && (
          <div className="fixed flex bg-amber-400  items-center inset-0 justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-sm mx-4">
              <h3 className="text-xl font-bold text-center text-black mb-2">
                Are you sure?
              </h3>
              <p className="text-purple-600 text-center mb-4">
                This action cannot be undone.
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setOrderToDelete(null)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-gray-600 "
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-800 "
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {orders.length === 0 ? (
            <div className="text-center py-12 bg-amber-200 rounded-lg shadow-sm">
              <FaBox className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-3xl font-bold text-black mb-2">
                No orders yet
              </h3>
              <p className="text-xl font-semibold text-gray-600 mb-6">
                Browse our toy collection and place your first order!
              </p>
              <Link
                to="/toy"
                className="px-4 py-2 bg-green-500 border-none rounded-lg text-white hover:bg-gradient-to-br from-[#632ee3] to-[#9f62f2] btn transition-colors"
              >
                Browse All Toys
              </Link>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={order.pictureURL}
                    className="w-20 h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/80x80?text=Toy+Image";
                    }}
                  />

                  <div className="flex-1">
                    <h3 className="text-2xl  font-bold text-black mb-1">
                      {order.toyName}
                    </h3>
                    <div className="flex flex-col-reverse lg:flex-row items-center space-x-4 my-2 text-sm">
                      <span className="text-lg text-purple-600 font-semibold">
                        ${order.price}
                      </span>
                      <span className="text-red-500">•</span>
                      <span className=" font-medium text-purple-600">
                        <strong className="text-green-400">Quantity:</strong>{" "}
                        {order.quantity}
                      </span>
                      <span className="text-red-500">•</span>
                      <span className="font-medium text-purple-600">
                        <strong className="text-pink-600">Ordered:</strong>{" "}
                        {new Date(order.orderDate).toLocaleDateString()}
                      </span>
                      {order.deliveryDate && (
                        <>
                          <span className="text-red-500">•</span>
                          <span className="text-green-600">
                            <strong>Delivered:</strong>{" "}
                            {new Date(order.deliveryDate).toLocaleDateString()}
                          </span>
                        </>
                      )}
                    </div>
                    {order.trialStart && order.trialEnd && (
                      <div className="mt-2 text-xs text-blue-600">
                        <strong>Trial Period:</strong>{" "}
                        {new Date(order.trialStart).toLocaleDateString()} -{" "}
                        {new Date(order.trialEnd).toLocaleDateString()}
                      </div>
                    )}
                    <div className="mt-1 font-bold text-sm text-black">
                      <strong className="text-lg text-amber-800">
                        Seller:
                      </strong>{" "}
                      {order.sellerName}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      {getStatusIcon(order.status)}
                      <span className="text-sm font-medium text-gray-700">
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/toy/${order.toyId}`}
                        className="flex items-center text-green-500 font-medium border-none hover:text-purple-500"
                      >
                        <FaEye className="mr-2" />
                        View Toy
                      </Link>
                      <button
                        onClick={() => setOrderToDelete(order.id)}
                        className="flex items-center text-red-500 font-medium border-none hover:text-red-700"
                      >
                        <FaTrash className="mr-2" />
                        Delete Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;