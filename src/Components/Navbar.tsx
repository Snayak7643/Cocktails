import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src="" alt="cocktail db logo" className="logo" />
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
