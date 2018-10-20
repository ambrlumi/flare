import React, { Component } from "react";

import Navbar from "./components/Navbar";
import MapGL from "./components/Map";
import Sidebar from "./components/Sidebar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
          <Sidebar />
          <MapGL />
        </div>
      </div>
    );
  }
}
