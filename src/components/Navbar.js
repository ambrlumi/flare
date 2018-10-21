import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar expand-lg">
        {/* <span className="navbar-brand mb-0 h1">Ambr</span> */}
        <span className="navbar-brand">
          <img
            src={require("../static/images/icon.png")}
            width="50"
            height="50"
            alt=""
          />
        </span>
      </nav>
    );
  }
}
