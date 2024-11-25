import React from "react";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <div className="navbar-text">
        <h1 className="name">Marília Franco</h1>
        <h2 className="tagline">{t("navbar.tagline")}</h2>
        <code>&lt;Code like a girl /&gt;</code>
      </div>
    </nav>
  );
};

export default Navbar;
