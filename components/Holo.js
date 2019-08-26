import React, { Component } from "react";
import { asset, View } from "react-360";
import Entity from "Entity";
import AmbientLight from "AmbientLight";

export default class Holo extends Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={0.7} color={"#a9a9a9"} />
        <Entity
          source={{
            gltf2: asset("./Holo/scene.gltf")
            // mtl: asset(["lamp01.jpg", "metal01.jpg", "wood01.jpg"])
          }}
          style={{
            marginLeft: -20,

            transform: [{ scale: 0.6 }, { rotateY: 90 }, { rotateX: -260 }]
          }}
        />
      </View>
    );
  }
}
