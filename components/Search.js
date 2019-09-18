import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  asset,
  Image,
  NativeModules,
  VrButton,
  AppRegistry
} from "react-360";

const { AudioModule } = NativeModules;
import { registerKeyboard } from "react-360-keyboard";
import { CharacterInfo } from "../data";
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      rangerImgs: CharacterInfo,
      searchedImage: ""
    };
    this.searchRangerbase = this.searchRangerbase.bind(this);
  }

  onClick = () => {
    NativeModules.Keyboard.startInput({
      initialValue: this.state.name,
      placeholder: "Search for a Ranger",
      emoji: true
    }).then(name => {
      console.log(name);
      this.setState({ name });
      this.searchRangerbase();
    });
  };

  searchRangerbase() {
    const { name } = this.state;

    let searchedImage;

    switch (name) {
      case "Red":
        this.setState({
          searchedImage: this.state.rangerImgs[1].imgURL
        });
        break;
      case "red":
        this.setState({
          searchedImage: this.state.rangerImgs[1].imgURL
        });
        break;
      case "Red Ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[1].imgURL
        });
        break;
      case "Red ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[1].imgURL
        });
        break;
      case "Devon":
        this.setState({
          searchedImage: this.state.rangerImgs[1].imgURL
        });
        break;
      case "Yellow Ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[2].imgURL
        });
        break;
      case "Yellow":
        this.setState({
          searchedImage: this.state.rangerImgs[2].imgURL
        });
        break;
      case "yellow ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[2].imgURL
        });
        break;
      case "yellow":
        this.setState({
          searchedImage: this.state.rangerImgs[2].imgURL
        });
        break;
      case "Zoey":
        this.setState({
          searchedImage: this.state.rangerImgs[2].imgURL
        });
        break;
      case "Blue Ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[3].imgURL
        });
        break;
      case "Blue":
        this.setState({
          searchedImage: this.state.rangerImgs[3].imgURL
        });
        break;
      case "blue ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[3].imgURL
        });
        break;
      case "blue":
        this.setState({
          searchedImage: this.state.rangerImgs[3].imgURL
        });
        break;
      case "Ravi":
        this.setState({
          searchedImage: this.state.rangerImgs[3].imgURL
        });
        break;
      case "Gold Ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[4].imgURL
        });
        break;
      case "Gold":
        this.setState({
          searchedImage: this.state.rangerImgs[4].imgURL
        });
        break;
      case "gold ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[4].imgURL
        });
        break;
      case "gold":
        this.setState({
          searchedImage: this.state.rangerImgs[4].imgURL
        });
        break;
      case "Nate":
        this.setState({
          searchedImage: this.state.rangerImgs[4].imgURL
        });
        break;
      case "Silver Ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[5].imgURL
        });
        break;
      case "Silver":
        this.setState({
          searchedImage: this.state.rangerImgs[5].imgURL
        });
        break;
      case "silver ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[5].imgURL
        });
        break;
      case "silver":
        this.setState({
          searchedImage: this.state.rangerImgs[5].imgURL
        });
        break;
      case "Steel":
        this.setState({
          searchedImage: this.state.rangerImgs[5].imgURL
        });
        break;
      case "Ranger":
        this.setState({
          searchedImage: this.state.rangerImgs[0].imgURL
        });
        break;

      default:
        this.setState({
          searchedImage: this.state.rangerImgs[6].imgURL
        });
    }
  }

  render() {
    const { searchedImage } = this.state;
    return (
      <View style={styles.panel}>
        <View style={styles.BoxTop}>
          <VrButton onClick={this.onClick} style={styles.greetingBox}>
            <Text style={styles.greeting}>
              {this.state.name || "Click to Search"}
            </Text>
          </VrButton>
        </View>
        <View style={styles.BoxBottom}>
          <Image
            style={styles.imgStyle}
            source={searchedImage || this.state.rangerImgs[0].imgURL}
            resizeMode='contain'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    borderRadius: 20,
    width: 600,
    height: 430,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  },
  BoxTop: {
    padding: 5,
    width: 600,
    height: 80,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#262729",
    borderColor: "#639dda",
    borderWidth: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  BoxBottom: {
    width: 600,
    height: 340,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greetingBox: {
    marginTop: 20,
    padding: 5,
    backgroundColor: "transparent",
    width: 500,
    height: 80
  },
  greeting: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
  imgStyle: {
    width: 595,
    height: 334
  }
});

AppRegistry.registerComponent(...registerKeyboard);
