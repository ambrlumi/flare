import React from "react";

import Card from "./shared/Card";

import caseService from "../services/case";

export default class Sidebar extends React.Component {
  renderCases = cases =>
    cases.map(casex => (
      <Card key={casex._id} locate={this.locate} case={casex} />
    ));

  locate = casex => {
    this.props.locateCase(casex);
  };

  render() {
    const { openCases } = this.props;

    return (
      <div className="sidebar">
        {openCases.length > 0 && this.renderCases(openCases)}
        {openCases.length > 0 || <p>Retrieving cases.. </p>}
      </div>
    );
  }
}
