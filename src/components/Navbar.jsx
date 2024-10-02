/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="leftNavbar">
        <img src="./logo.png" alt="" />
      </div>
      <div className="rightNavbar">
        <a href="https://drive.google.com/file/d/1IUjDOsTzpkrDYKCkuhPboSiJKgJfCrz3/view?usp=sharing">
          Resume
        </a>
        <a href="#contact">Contact</a>
        <a href="#project">Project</a>
      </div>
    </div>
  );
};

export default Navbar;
