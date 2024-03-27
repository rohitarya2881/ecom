import React from "react";
// import "./Header.css";
import "./header.css";
import { NavLink } from "react-router-dom";
import elogo from "../../assets/elogo.png";
import searchicon1 from "../../assets/searchicon.png";
import crossicon from "../../assets/closeicon.png";

import hearticon from "../../assets/heart.png";
import menuicon from "../../assets/menu.png";

import carticon from "../../assets/carticon.png";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchIconSrc, setSearchIconSrc] = useState(searchicon1);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchIconSrc(searchIconSrc === searchicon1 ? crossicon : searchicon1);

    console.log(showSearch);
  };

  return (
    <nav>
      <img src={elogo} alt="" className="logo" />
      <div className="list-search">
        {showSearch && (
          <form>
          <div className="search-input">
            <input type="text" placeholder="Search..." />
           <button type="submit"> <i class="fa fa-search" aria-hidden="true"></i></button>
          </div></form>
        )}
        <ul
          id="menu-links"
          className={`${showMenu ? "show-menu" : ""} ${
            showSearch ? "hide-ul" : ""
          }`}
        >
          <div className="li-element">
            <li className="nav-link a1">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link a2">
              <NavLink to="#">Category</NavLink>
            </li>
            <li className="nav-link a3">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-link a4">
              <NavLink to="#">Products</NavLink>
            </li>
            <li className="nav-link a5">
              <NavLink to="#">Blog</NavLink>
            </li>
            <li className="nav-link a6">
              <NavLink to="#">Contact us</NavLink>
            </li>
            <div className="underbars"></div>
          </div>
        </ul>
      </div>

      <div className={`search-cart-like `}>
        <img
          src={searchIconSrc}
          alt="Search"
          width="24px"
          height="24px"
          className={` ${showSearch ? "cross-icon" : ""}`}
          onClick={toggleSearch}
        />
        <img
          src={carticon}
          alt="Cart"
          width="24px"
          height="24px"
          className={showSearch ? "hide-search-cart-like" : ""}
        />
        <img
          src={hearticon}
          alt="Cart"
          width="24px"
          height="24px"
          className={showSearch ? "hide-search-cart-like" : ""}
        />

        <img
          src={menuicon}
          alt=""
          className="menu-links menu-icon"
          width="32px"
          height="32px"
          onClick={toggleMenu}
        />
      </div>
      <button className="nav-btn">
        Get Started <img src="images/arrow-white.png" alt="" />
      </button>
    </nav>
  );
}

export default Header;
