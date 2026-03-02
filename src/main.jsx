import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import { Toaster } from "react-hot-toast";
import GlobalLoader from "./Components/GlobalLoader";
import { AppProvider } from "./Provider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalLoader />
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AppProvider>
  </React.StrictMode>
);
