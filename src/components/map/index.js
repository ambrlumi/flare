import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGNhc3QxODgiLCJhIjoiY2pmNjE4cW5sMTVlbDJ4cDRuaXg2bGdocCJ9._vCZx3elzygB4Alr55WMYw"
});

class MapGL extends Component {
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{ height: "100vh", width: "100vw" }}
      />
    );
  }
}

export default MapGL;
