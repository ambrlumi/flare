import React, { Component } from "react";

import Navbar from "./components/Navbar";
import MapGL from "./components/MapGL";
import Sidebar from "./components/Sidebar";

import caseService from "./services/case";

export default class App extends Component {
  state = { focusCase: "", openCases: [] };

  componentDidMount = async () => {
    try {
      const openCases = await caseService.cases();
      this.setState({ openCases });
    } catch (e) {
      this.setState({ openCases: [] });
    }
  };

  locateCase = focusCase => this.setState({ focusCase });

  render() {
    const { focusCase, openCases } = this.state;
    return (
      <div>
        <Navbar />
        <div className="main">
          <Sidebar locateCase={this.locateCase} openCases={openCases} />
          {openCases.length > 0 && (
            <MapGL focusCase={focusCase} openCases={openCases} />
          )}
        </div>
      </div>
    );
  }
}
