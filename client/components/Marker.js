import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";

export default class Marker extends Component {
  render() {
    return (
      <MapView region={this.state.region} onRegionChange={this.onRegionChange}>
        {this.state.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({});
