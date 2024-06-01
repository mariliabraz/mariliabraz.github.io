import React from "react";
import { Menu } from "antd";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-text">
        <h1>Marília Franco</h1>
        <h2>Web Developer</h2>
        <p>&lt;Code like a girl /&gt;</p>
      </div>
    </nav>
  );
};

export default Navbar;
