import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#fafafa] text-gray-600 mt-8">

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">


        <div>
          <Link
            to="/"
            className="text-2xl font-semibold text-[#387ed1]"
          >
            Zerodha
          </Link>

          <p className="mt-4 text-sm leading-6">
            India's largest stock broker
          </p>

          <p className="mt-4 text-xs leading-5 text-gray-500">
            © 2026 Zerodha Clone. All rights reserved.
          </p>
        </div>


        <div>
          <h3 className="mb-4 text-base font-semibold text-gray-800">
            Company
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/about" className="hover:text-[#387ed1]">
              About
            </Link>

            <Link to="/products" className="hover:text-[#387ed1]">
              Products
            </Link>

            <Link to="/pricing" className="hover:text-[#387ed1]">
              Pricing
            </Link>

            <Link to="/support" className="hover:text-[#387ed1]">
              Support
            </Link>
          </div>
        </div>


        <div>
          <h3 className="mb-4 text-base font-semibold text-gray-800">
            Account
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/signup" className="hover:text-[#387ed1]">
              Open account
            </Link>

            <Link to="/login" className="hover:text-[#387ed1]">
              Login
            </Link>

            <Link to="/signup" className="hover:text-[#387ed1]">
              Free account
            </Link>
          </div>
        </div>


        <div>
          <h3 className="mb-4 text-base font-semibold text-gray-800">
            Resources
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/support" className="hover:text-[#387ed1]">
              Support portal
            </Link>

            <Link to="/products" className="hover:text-[#387ed1]">
              Trading products
            </Link>

            <Link to="/pricing" className="hover:text-[#387ed1]">
              Pricing
            </Link>

            <Link to="/about" className="hover:text-[#387ed1]">
              About us
            </Link>
          </div>
        </div>

      </div>

                                    jk7
      <div className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-6">
        <p className="text-xs leading-6 text-gray-500">
          Investment in securities market are subject to market risks.
          Read all the related documents carefully before investing.
        </p>

        <p className="mt-2 text-xs leading-6 text-gray-500">
          This website is a learning project and is not affiliated with
          Zerodha Broking Limited.
        </p>
      </div>

    </footer>
  );
}

export default Footer;