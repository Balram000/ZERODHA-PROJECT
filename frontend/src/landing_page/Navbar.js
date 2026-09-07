import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src="/Images/logo.svg"
            alt="Zerodha Logo"
            className="w-32"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[16px] text-gray-600 font-normal">

          {/* Signup */}
          <li>
            <Link
              to="/signup"
              className="hover:text-blue-600 transition"
            >
              Signup
            </Link>
          </li>

          {/* Login */}
          <li>
            <Link
              to="/login"
              className="hover:text-blue-600 transition"
            >
              Login
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

          {/* Products */}
          <li>
            <Link
              to="/Products"
              className="hover:text-blue-600 transition"
            >
              Products
            </Link>
          </li>

          {/* Pricing */}
          <li>
            <Link
              to="/Pricing"
              className="hover:text-blue-600 transition"
            >
              Pricing
            </Link>
          </li>

          {/* Support */}
          <li>
            <Link
              to="/Support"
              className="hover:text-blue-600 transition"
            >
              Support
            </Link>
          </li>

          {/* Menu */}
          <li>
            <button className="text-2xl hover:text-blue-600 transition">
              ☰
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <button className="md:hidden text-3xl">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
