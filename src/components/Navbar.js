import React from "react";

const Navbar = props => (
  <nav className="navbar expand-lg">
    <span className="navbar-brand">
      <img
        src={require("../static/images/logo_black.svg")}
        width="50"
        height="50"
        alt="Logo"
      />
    </span>
  </nav>
);

export default Navbar;
