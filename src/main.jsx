import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import ContextProvider from "./ContextProvider/ContextProvider";
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
    </ContextProvider>
  </React.StrictMode>
);
