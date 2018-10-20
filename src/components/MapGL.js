import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import config from "../config";

const viewport = {
  width: 400,
  height: 400,
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8
};

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
        lat: "81.2380",
        lng: "-25.4250",
        make: "VW",
        color: "Blue",
        tag: "XXX234"
      }
    ],
    viewport: {
      width: 100,
      height: 100,
      latitude: 25.7574,
      longitude: -80.3733,
      zoom: 8
    }
  };

  componentDidMount() {
    const { cases } = this.props;
    const mapContainer = document.querySelector(".map");

    const { width, height } = mapContainer.getClientRects()[0];

    this.setState(({ cases, viewport }) => {
      return { cases, viewport: { ...viewport, width: width, height: height } };
    });
  }

  render() {
    const markers = this.state.cases.map(({ lat, lng }, keys) => {
      return (
        <Marker
          key={keys}
          latitude={parseFloat(lat)}
          longitude={parseFloat(lng)}
        >
          <img />
        </Marker>
      );
    });

    return (
      <div className="map">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={config.MAP_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {markers}
        </ReactMapGL>
      </div>
    );
  }
}
