import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <img
            src="/images/appLogo.png"
            alt="Logo Icon"
            className="logo-icon"
          />
        </div>

        <div className="header-center">
          <h1>LOGO</h1>
        </div>

        <div className="header-right">
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaShoppingBag className="icon" />
          <FaUser className="icon" />
          <div className="lang">
            ENG <span className="arrow">▼</span>
          </div>
        </div>
      </div>

      <nav className="nav-links">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
