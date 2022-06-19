import React from "react";
import "../styles/navBar.css";

const NavBar = () => (
  <div className="navBar">
    <img
      src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
      alt="surreal estate logo"
    />
    <ul className="navbar-links">
      <li className="navBar-links-item">Home</li>
      <li className="navBar-links-item">View Properties</li>
      <li className="navBar-links-item">Add a Property</li>
      <li className="navBar-links-item">About</li>
      <li className="navBar-links-item">Contact</li>
    </ul>
  </div>
);

export default NavBar;
