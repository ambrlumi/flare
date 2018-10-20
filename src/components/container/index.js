import React, { Component } from "react";
import Navbar from "../navbar";
import MapGL from "../map";

class Container extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <MapGL />
        </div>
      </div>
    );
  }
}

export default Container;
