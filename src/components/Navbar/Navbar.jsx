import React from "react";
import { Menu } from "antd";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-text">
        <h1 className="name">Marília Franco</h1>
        <h2 className="tagline">Web Developer</h2>
        <code>&lt;Code like a girl /&gt;</code>
      </div>
    </nav>
  );
};

export default Navbar;
