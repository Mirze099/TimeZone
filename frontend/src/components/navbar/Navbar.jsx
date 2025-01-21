import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
            alt=""
          />
        </div>
        <ul className="navlist">
          <div className="navlist-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navlist-item">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="navlist-item">
            <Link to="/about">About</Link>
          </div>
          <div className="navlist-item">
            <Link to="/latest">Latest</Link>
          </div>
          <div className="navlist-item">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="navlist-item">
            <Link to="/pages">Pages</Link>
          </div>
          <div className="navlist-item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="navlist-item">
            <Link to="/admin">Admin</Link>
          </div>
          <div className="navlist-item">
            <Link to="/wishlist">Wishlist</Link>
          </div>
          <div className="navlist-item">
            <Link to="/basket">Basket</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
