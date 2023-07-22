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
                "Montserrat:400",
                "Oswald:300",
                "Oswald:400",
                "Oswald:600",
                "Lumanosimo:400",
                "Lato:400",
                "Roboto:400",
                "Lora:400"

              ],
            },
          });
        });
      },
    },
  },
}

export default mysticSeafoamGreen;
