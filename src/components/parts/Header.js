import React from "react";
import Navbar from "./navbar.js";

const Header = () => {
  return (
    <header className="clearfix header-style5">
      <div className="logo-place">
        <div className="container">
          <div className="inner-logo-place">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <Navbar></Navbar>
    </header>
  );
};

export default Header;
