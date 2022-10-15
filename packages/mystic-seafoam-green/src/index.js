import Root from "./components";
import link from "@frontity/html2react/processors/link";

const mysticSeafoamGreen = {
  name: "mystic-seafoam-green",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  },
  actions: {
    theme: {},
  },
}

export default mysticSeafoamGreen;
