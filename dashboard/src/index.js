import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet,} from "react-router-dom";
import "./index.css";
import Home from './Components/Home'
import Holdings from "./Components/Holdings";
import Menu from "./Components/Menu";
import Dashboard from "./Components/Dashboard";
import Positions from "./Components/Positions";
import Orders from "./Components/Orders";
import TopBar from "./Components/TopBar";
import WatchList from "./Components/WatchList";
import Funds from "./Components/Funds";
import Apps from "./Components/Apps";


function Layout() {
  return (
    <div>
      <TopBar />
      <Outlet />
  
    </div>
  );
}



const router = createBrowserRouter([
  {
    
    element:  <Layout/> ,
  children :[
  {
    path: "/",
    element: <> <Home/> </>,
  },
  {
    path: "/Holding",
    element: <> <Holdings/> </>,
  },
  {
    path: "/Menu",
    element: <> <Menu/> </>,
  },
  {
    path: "/Dashboard",
    element: <> <Dashboard/> </>,
  },
  {
    path: "/Positions",
    element: <> <Positions/> </>,
  },
  {
    path: "/Orders",
    element: <> <Orders/> </>,
  },
  {
    path: "/funds",
    element: <> <Funds/> </>,
  },
  {
    path: "/Apps",
    element: <> <Apps/> </>,
  },
  {
    path: "/WatchList",
    element: <> <WatchList/> </>,
  },
 ],
},
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);