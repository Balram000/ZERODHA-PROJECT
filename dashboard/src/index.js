import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './Components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Home/> </>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);