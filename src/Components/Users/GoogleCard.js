import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="philiance">
    <i class="fas fa-map-marker-alt"></i>
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.6249,
      lng: 2.42267,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "40vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys="jhgdsfijkhdjskfgerogujkdfgjhgfuydfsg,ndfguE"
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={48.6249} lng={2.42267} text="Philiance" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
