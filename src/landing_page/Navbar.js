import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center justify-between">

        
        <Link to="/">
          <img
            src="/Images/logo.svg"
            alt="Zerodha Logo"
            className="w-32"
          />
        </Link>

      
        <ul className="hidden md:flex items-center gap-10 text-[16px] text-gray-600 font-normal">
          <li>
            <Link to="/signup" className="hover:text-blue-600 transition">
              Signup
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-blue-600 transition">
              Products
            </Link>
          </li>

          <li>
            <Link to="/pricing" className="hover:text-blue-600 transition">
              Pricing
            </Link>
          </li>

          <li>
            <Link to="/support" className="hover:text-blue-600 transition">
              Support
            </Link>
          </li>

          <li>
            <button className="text-2xl hover:text-blue-600 transition">
              ☰
            </button>
          </li>
        </ul>

        
        <button className="md:hidden text-3xl">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;