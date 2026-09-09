import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdown(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="menu-container">

      <img
        src="logo.png"
        alt="logo"
        style={{ width: "50px" }}
      />

      <div className="menus">

        {/* Main Menu */}
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holding"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile */}
        <div className="profile-section">

          <div
            className="profile"
            onClick={handleProfileClick}
          >
            <div className="avatar">ZU</div>

            <p className="username">USERID</p>
          </div>

          {/* Profile Dropdown */}
          {isProfileDropdown && (
            <div className="profile-dropdown">

              <Link to="/profile">My Profile</Link>

              <Link to="/settings">
                Settings
              </Link>

              <Link to="/help">
                Help
              </Link>

              <a
                href="http://localhost:3000/login"
                className="profile-dropdown-link"
              >
                Login
              </a>

              <button onClick={handleLogout}>
                Logout
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Menu;