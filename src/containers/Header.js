import React from "react";
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
        <div className="fake-shpping">
            <h2 className="logo">FakeShop</h2>
        </div>

        <div className="nav-links">
          <ul>
            <li>Categories</li>
            <li>Deals</li>
            <li>Whats New</li>
            <li>Delivery</li>
          </ul>
        </div>
      
        <div className="search-box">
          <input placeholder="Search for products" />
          <h2 className="account">Account</h2>
          <h2 className="cart">Cart</h2>
        </div>
        
      
    </nav>
  );
};

export default Header;
