import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  NativeModules,
  VrButton
} from "react-360";
import Fan from "./components/Fan";
import Holo from "./components/Holo";
import GBContent from "./components/GBContent";
import Search from "./components/Search";

const { AudioModule } = NativeModules;

import { VideoPlayer, VideoControl } from "./src/VideoExtra";
import { VIDEO_SOURCE } from "./data";

export default class PRGB extends Component {
  constructor() {
    super();
    this.state = {
      videoUrl: VIDEO_SOURCE,
      hidden: true,
      selectedVideo: "",
      isLoading: true
    };
    this.playIntro = this.playIntro.bind(this);
  }

  componentDidMount() {
    this.playIntro(),
      setTimeout(
        function() {
          AudioModule.stopEnvironmental(), this.setState({ hidden: false });
        }.bind(this),
        33000
      );
  }
  async playIntro() {
    await AudioModule.playEnvironmental({
      source: asset("ThemeSong.mp3"),
      volume: 0.5
    });
  }

  render() {
    return (
      <View style={styles.panel}>
        {this.state.hidden ? (
          <View>
            <Text style={styles.greeting}>{"Welcome to".toUpperCase()}</Text>
            <Text style={styles.greeting}>
              {"Grid Battle Force".toUpperCase()}
            </Text>
            <Text style={styles.note}>
              {"** NOTE: LISTEN UNTIL THEME IS FINISHED".toUpperCase()}
            </Text>
          </View>
        ) : (
          <VideoPlayer
            muted={false}
            source={this.state.videoUrl[0]}
            showControl={true}
            stero={"2D"}
            volume={0.5}
            style={{
              width: 400,
              height: 270
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    flex: 1,
    marginTop: 145,
    marginLeft: 300,
    width: 400,
    height: 300,
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 50,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#fff",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 43,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },

  note: {
    marginTop: 60,
    fontSize: 20,
    color: "#FF0000",
    fontWeight: "bold",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("PRGB", () => PRGB);
AppRegistry.registerComponent("Fan", () => Fan);
AppRegistry.registerComponent("Holo", () => Holo);
AppRegistry.registerComponent("GBContent", () => GBContent);
AppRegistry.registerComponent("Search", () => Search);
