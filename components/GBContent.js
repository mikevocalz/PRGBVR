import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  asset,
  Image,
  VrButton,
  NativeModules
} from "react-360";

const { AudioModule } = NativeModules;
import { rangerIcons } from "../data";

export default class GBContent extends Component {
  constructor() {
    super();
    this.state = {
      imgs: rangerIcons,
      selectedImage: "",
      hoverColor: "#fff"
    };
    this.handleClicked = this.handleClicked.bind(this);
  }

  changeColor() {
    this.setState({ hoverColor: !this.state.hoverColor });
  }

  handleClicked(ranger) {
    let selectedImage;

    //insert audio sound
    AudioModule.playOneShot({
      source: asset("cursor-click.wav")
    });
    switch (ranger) {
      case 1:
        this.setState({
          selectedImage: this.state.imgs[0].image
        });

        break;
      case 2:
        this.setState({
          selectedImage: this.state.imgs[1].image
        });
        break;
      case 3:
        this.setState({
          selectedImage: this.state.imgs[2].image
        });
        break;
      case 4:
        this.setState({
          selectedImage: this.state.imgs[3].image
        });
        break;
      case 5:
        this.setState({
          selectedImage: this.state.imgs[4].image
        });
        break;
      case 6:
        this.setState({
          selectedImage: this.state.imgs[5].image
        });
        break;
      default:
        null;
    }
  }

  render() {
    const { selectedImage } = this.state;

    return (
      <View style={styles.panel}>
        <View style={styles.BoxLeft}>
          {this.state.imgs.map((item, index) => (
            <VrButton
              style={styles.myButton}
              key={index}
              onClick={() => this.handleClicked(item.key)}
            >
              <Image
                style={styles.icon}
                source={item.icon}
                resizeMode='contain'
              />
            </VrButton>
          ))}
        </View>
        <View style={styles.BoxRight}>
          <Image
            style={styles.gbImage}
            source={selectedImage || this.state.imgs[0].image}
            resizeMode='contain'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    // marginTop: -15,
    borderRadius: 20,
    width: 950,
    height: 460,
    backgroundColor: "transparent",
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  myButton: {
    // "&:hover": {
    //   borderColor: "#639dda",
    //   borderWidth: 2
    // }
  },
  BoxLeft: {
    padding: 5,
    width: "30%",
    height: 430,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "transparent",
    borderColor: "#639dda",
    borderWidth: 2,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  BoxRight: {
    width: "69%",
    padding: 20,
    height: 430,
    marginLeft: -0.3,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "transparent",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },
  icon: {
    height: 120,
    width: 120,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 12,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "#639dda",

    borderWidth: 2
  },
  gbImage: {
    marginTop: -8,
    width: "100%",
    height: 400,
    borderRadius: 10
  }
});
