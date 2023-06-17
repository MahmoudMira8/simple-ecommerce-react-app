import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} className="shopping-cart-icon"/>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
