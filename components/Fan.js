import React, { Component } from "react";
import { asset, View } from "react-360";
import Entity from "Entity";
import AmbientLight from "AmbientLight";

export default class Fan extends Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={0.2} color={"#fff"} />
        <Entity
          lit={true}
          source={{
            obj: asset("./Fan/CeilingFan.obj")
          }}
          texture={
            (asset("./Fan/metal01.jpg"),
            asset("./Fan/wood01.jpg"),
            asset("./Fan/lamp01.jpg"))
          }
          style={{
            transform: [{ scale: 0.4 }]
          }}
        />
      </View>
    );
  }
}
