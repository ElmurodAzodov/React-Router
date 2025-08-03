import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" width={130} height={30} />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
