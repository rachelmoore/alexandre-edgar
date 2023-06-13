import Root from "./components"

const mysticSeafoamGreen = {
  name: "mystic-seafoam-green",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      beforeCSR: () => {
        import("webfontloader").then((WebFontLoader) => {
          WebFontLoader.load({
            google: {
              families: [
                "Rye:400",
                "Inconsolata:400",
                "Montserrat:400",
              ],
            },
          });
        });
      },
    },
  },
}

export default mysticSeafoamGreen
