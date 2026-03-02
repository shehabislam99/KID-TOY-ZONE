import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import ForgotPassword from '../Pages/Auth/ForgotPassword';
import PrivetRoute from '../Components/PrivetRoute';
import ToyDetails from '../Pages/Toys/ToyDetails';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import AllToys from '../Components/AllToys';
import MyOrders from '../Pages/ExtraRoute/MyOrder';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/toy",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivetRoute>
            <ToyDetails></ToyDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-order",
        element: (
          <PrivetRoute>
            <MyOrders></MyOrders>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;