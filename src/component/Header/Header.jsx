import React from 'react';
// import "./Header.css";
import "./header.css";
import { NavLink } from "react-router-dom";
import elogo from "../../assets/elogo.png";
import searchicon from "../../assets/searchicon.png";
import hearticon from "../../assets/heart.png";
import menuicon from "../../assets/menu.png";


import carticon from "../../assets/carticon.png";
import  { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav >
      <img src={elogo} alt="" className="logo" />

      <ul id="menu-links" className={showMenu ? 'show-menu' : ''}>
        
              <li className="nav-link">
                <NavLink  to="#"  >
                  Home
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink  to="#"  >
                 Category
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink  to="#" >
                  About
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink  to="#">
                  Products
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink  to="#"  >
                  Blog
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink  to="#" >
                  Contact us
                </NavLink>
              </li>
            
      </ul>

      <div className="search-cart-like">
        <img src={searchicon} alt="Search" width="36px" height="36px" className="me-3" />
        <img src={carticon} alt="Cart" width="36px" height="36px" />
        <img src={hearticon} alt="Cart" width="36px" height="36px" />

        <img
          src={menuicon}
          alt=""
          className="menu-links menu-icon"
          width="32px"
          height="32px"
          onClick={toggleMenu}
        />
      </div>
      <button className="nav-btn">Get Started <img src="images/arrow-white.png" alt="" /></button>
    </nav>
  );
}

export default Header;
