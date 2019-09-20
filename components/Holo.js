import React, { Component } from "react";
import { asset, View, VrButton, Image, Environment } from "react-360";
import Entity from "Entity";
import AmbientLight from "AmbientLight";

export default class Holo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onHandleClickTwo = this.onHandleClickTwo.bind(this);
  }
  onHandleClick() {
    this.setState({
      selected: Environment.setBackgroundImage(asset("cyberDim.jpg"))
    });
  }

  onHandleClickTwo() {
    this.setState({
      selected: Environment.setBackgroundImage(asset("GBF360.jpg"))
    });
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={0.7} color={"#a9a9a9"} />
        <VrButton
          onLongClick={this.onHandleClickTwo}
          onClick={this.onHandleClick}
        >
          <Entity
            source={{
              gltf2: asset("./Holo/scene.gltf")
            }}
            style={{
              marginLeft: -20,
              transform: [{ scale: 0.6 }, { rotateY: 90 }, { rotateX: -260 }]
            }}
          />
        </VrButton>
      </View>
    );
  }
}
