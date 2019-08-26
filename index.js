import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  VrButton
} from "react-360";
import Fan from "./components/Fan";
import Holo from "./components/Holo";
import GBContent from "./components/GBContent";

import { VideoPlayer, VideoControl } from "./src/VideoExtra";
import { VIDEO_SOURCE, videoButtons } from "./data";

export default class PRGB extends Component {
  constructor() {
    super();
    this.state = {
      videoUrl: VIDEO_SOURCE,
      selectedVideo: ""
    };
    this.onClickVideo = this.onClickVideo.bind(this);
  }

  onClickVideo(video) {
    let selectedVideo;
    console.log("hey", video);
    switch (video) {
      case 1:
        this.setState({
          selectedVideo: this.state.videoUrl[0].url
        });
        console.log(this.state.videoUrl[0].url);

        break;
      case 2:
        this.setState({
          selectedVideo: this.state.videoUrl[1].url
        });
        break;
      case 3:
        this.setState({
          selectedVideo: this.state.videoUrl[2].url
        });
        break;
      default:
        null;
    }
  }

  render() {
    const { selectedVideo } = this.state;

    return (
      <View style={styles.panel}>
        <VideoPlayer
          muted={false}
          source={this.state.videoUrl[0] || this.state.selectedVideo}
          showControl={true}
          stero={"2D"}
          volume={0.5}
          style={{
            width: 400,
            height: 270
          }}
        />
        {/* <View
          style={{
            marginTop: 5,
            flexDirection: "row"
          }}
        >
          {videoButtons.map((item, index) => (
            <VrButton
              key={index}
              style={{
                backgroundColor: "black",
                width: 100,
                height: 30,
                alignItems: "center",
                borderRadius: 5,
                marginLeft: 10,
                marginRight: 10
              }}
              onClick={() => this.onClickVideo(item.key)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {item.text}
              </Text>
            </VrButton>
          ))}
        </View> */}
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
  greetingBox: {
    padding: 20,
    backgroundColor: "#fff",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("PRGB", () => PRGB);
AppRegistry.registerComponent("Fan", () => Fan);
AppRegistry.registerComponent("Holo", () => Holo);
AppRegistry.registerComponent("GBContent", () => GBContent);
