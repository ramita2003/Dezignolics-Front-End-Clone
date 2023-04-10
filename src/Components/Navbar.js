import React from "react";
import logo from "../images/deziglogo.png";
import { Link } from "react-router-dom";
import { AiFillContacts } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <div className="outer">
        <div className="inner1">
          <img className="logo" src={logo} alt="Dezignolics Logo" />
        </div>
        <div className="inner2">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/contact">
              <li>
                <AiFillContacts className="contact" />
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
