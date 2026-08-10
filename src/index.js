import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './landing_page/Home/HomePage';
import About from './landing_page/About/AboutPage'
import Signup from  './landing_page/signup/Signup.js'
import Stats from './landing_page/Home/Stats';
import Pricing from './landing_page/Princing/PricingPage.js';
import Support from './landing_page/support/SupportPage.js'
import Products from './landing_page/Products/ProductPage.js'
 import Navbar from './landing_page/Navbar.js';
 import Footer from './landing_page/Footer.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

 function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/stats" element={<Stats />} />
      <Route path='/Pricing' element ={<Pricing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/Support' element ={<Support />} />
      <Route path='/Products' element ={<Products />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);