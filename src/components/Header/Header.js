import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/About-us">About Us</Link>
        <Link to="/Features">Features</Link>
        <Link to="/Contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
