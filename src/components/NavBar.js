import React from "react";
import "../styles/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navBar">
    <img
      src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
      alt="surreal estate logo"
    />
    <ul className="navbar-links">
      {/* <li className="navBar-links-item">Home</li> */}
      <Link className="navBar-links-item" to="/">
        View Properties
      </Link>
      <Link className="navBar-links-item" to="/add-property">
        Add Property
      </Link>
      {/* <li className="navBar-links-item">About</li>
      <li className="navBar-links-item">Contact</li> */}
    </ul>
  </div>
);

export default NavBar;
