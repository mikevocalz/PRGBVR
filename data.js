import { asset } from "react-360";

export const CharacterInfo = [
  {
    key: 1,
    imgURL: asset("./RangerDetails/pr-gb-promo.png")
  },
  {
    key: 2,
    imgURL: asset("./RangerDetails/pr-gb-red.png")
  },
  { key: 3, imgURL: asset("./RangerDetails/pr-gb-yellow.png") },
  { key: 4, imgURL: asset("./RangerDetails/pr-gb-blue.png") },
  { key: 5, imgURL: asset("./RangerDetails/pr-gb-gold.png") },
  { key: 6, imgURL: asset("./RangerDetails/pr-gb-silver.png") },
  { key: 7, imgURL: asset("./RangerDetails/pr-gb-zords.png") }
];

export const VIDEO_SOURCE = [
  {
    key: 1,
    url: asset("./BeastVideos/Season2Trailer.mp4").uri,
    fileFormat: "mp4"
  },
  {
    key: 2,
    url: asset("./BeastVideos/BeastXMegazord.mp4").uri,
    fileFormat: "mp4"
  }
];

export const videoButtons = [
  {
    key: 1,
    text: "Clip 1"
  },
  {
    key: 2,
    text: "Clip 2"
  },
  {
    key: 3,
    text: "Clip 3"
  }
];

export const rangerIcons = [
  {
    key: 1,
    icon: asset("./RangerIcons/logo.jpg"),
    image: asset("./RangerIcons/logo.jpg")
  },
  {
    key: 2,
    icon: asset("./RangerIcons/red.png"),
    image: asset("./RangerImages/Red.jpg")
  },
  {
    key: 3,
    icon: asset("./RangerIcons/blue.png"),
    image: asset("./RangerImages/Blue.png")
  },
  {
    key: 4,
    icon: asset("./RangerIcons/yellow.png"),
    image: asset("./RangerImages/Yellow.jpg")
  },
  {
    key: 5,
    icon: asset("./RangerIcons/gold.png"),
    image: asset("./RangerImages/Gold.jpg")
  },
  {
    key: 6,
    icon: asset("./RangerIcons/silver.png"),
    image: asset("./RangerImages/Silver.png")
  }
];
