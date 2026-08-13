import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [SetectMenu, SetSetectMenu] = useState(0);
  const [isProfileDropdwon, SetisProfileDownopen] = useState(false);

  const menuClass = "menu"
  const activeMenuClass = "menu Setected "

  const HandleMenuClick = (index) => { SetSetectMenu(index); }
  const HandleProfileClick = (index) => { SetisProfileDownopen(!isProfileDropdwon); }

  return (
    <div className="menu-container">
      <img src="logo.png" alt=' logo ' style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/Dashboard' onClick={() => HandleMenuClick(0)}>
              <p className={SetectMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/Orders' onClick={() => HandleMenuClick(0)}>
              <p className={SetectMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/Holding' onClick={() => HandleMenuClick(0)}>
              <p className={SetectMenu === 2 ? activeMenuClass : menuClass}>Holding</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/Positions' onClick={() => HandleMenuClick(0)}>
              <p className={SetectMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/Funds' onClick={() => HandleMenuClick(0)}>
              <p className={SetectMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to='/Apps' onClick={() => HandleMenuClick(0)}>
              <p className={SetectMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={HandleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

      </div>
    </div>
  );
};

export default Menu;