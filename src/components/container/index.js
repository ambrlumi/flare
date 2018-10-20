import React, { Component } from "react";
import Navbar from "../navbar";
import MapGL from "../map";
import Gallery from "../gallery";

class Container extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
          <Gallery />
          <MapGL />
        </div>
      </div>
    );
  }
}

export default Container;
