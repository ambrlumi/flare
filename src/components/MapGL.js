import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import config from "../config";

export default class MapGL extends React.Component {
  state = {
    focusCase: this.props.focusCase,
    viewport: {
      width: 1580,
      height: 1280,
      latitude: 25.736543,
      longitude: -80.307116,
      zoom: 8
    }
  };

  componentDidMount = async () => {
    const { latitude, longitude } = await this.getCoords();
    const { viewport } = this.state;
    this.setState({ viewport: { ...viewport, latitude, longitude } });
  };

  componentWillReceiveProps({ focusCase }) {
    const { viewport } = this.state;
    const { lat: latitude, lng: longitude } = focusCase;

    this.setState({
      focusCase,
      viewport: { ...viewport, zoom: 12, latitude, longitude }
    });
  }

  getCoords = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => resolve(coords),
        err => reject(err),
        { enableHighAccuracy: true }
      );
    });

  markers = cases =>
    cases.map(({ lat, lng }, i) => (
      <Marker key={i} latitude={parseFloat(lat)} longitude={parseFloat(lng)}>
        <img src={require("../static/images/fire.svg")} alt="marker" />
      </Marker>
    ));

  render() {
    const { viewport } = this.state;
    const { openCases } = this.props;

    return (
      <div className="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={config.MAP_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
          mapStyle="mapbox://styles/mapbox/streets-v8"
        >
          {this.markers(openCases)}
        </ReactMapGL>
      </div>
    );
  }
}
