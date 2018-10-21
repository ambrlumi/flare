import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import config from "../config";

export default class MapGL extends React.Component {
  state = {
    cases: [
      {
        lat: "25.7698",
        lng: "-80.3676",
        make: "VW",
        color: "Blue",
        tag: "XXX234"
      },
      {
        lat: "25.7684",
        lng: "-80.3671",
        make: "VW",
        color: "Blue",
        tag: "XXX234"
      }
    ],
    viewport: {
      width: 100,
      height: 100,
      latitude: 0,
      longitude: 0,
      zoom: 14
    }
  };

  componentDidMount = async () => {
    const { latitude, longitude } = await this.getCoords();
    const { viewport } = this.state;
    this.setState({ viewport: { ...viewport, latitude, longitude } });

    const mapContainer = document.querySelector(".map");
    const { width, height } = mapContainer.getClientRects()[0];

    this.setState(({ cases, viewport }) => ({
      cases,
      viewport: { ...viewport, width: width, height: height }
    }));
  };

  getCoords = () =>
    new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        resolve(coords);
      });
    });

  markers = cases =>
    cases.map(({ lat, lng }, i) => (
      <Marker key={i} latitude={parseFloat(lat)} longitude={parseFloat(lng)}>
        <img src={require("../static/images/marker.svg")} alt="marker" />
      </Marker>
    ));

  render() {
    const { cases, viewport } = this.state;

    return (
      <div className="map">
        <ReactMapGL {...viewport} mapboxApiAccessToken={config.MAP_TOKEN}>
          {this.markers(cases)}
        </ReactMapGL>
      </div>
    );
  }
}
