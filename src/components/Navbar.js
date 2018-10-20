import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar expand-lg navbar-light bg-light">
        {/* <span className="navbar-brand mb-0 h1">Ambr</span> */}
        <span className="navbar-brand">
          <img src="../static/images/icon.png" width="30" height="30" alt="" />
        </span>
      </nav>
    );
  }
}
