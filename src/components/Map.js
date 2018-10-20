import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import config from "../config";

const Map = ReactMapboxGl({ accessToken: config.MAP_TOKEN });

export default class MapGL extends React.Component {
  render() {
    return (
      <div className="map">
        <Map
          style="git pmapbox://styles/mapbox/streets-v9"
          containerStyle={{ height: "100vh", width: "100vw" }}
        >
          <Feature />
        </Map>
      </div>
    );
  }
}
