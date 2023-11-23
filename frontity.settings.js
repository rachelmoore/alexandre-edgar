const settings = {
  "name": "alexandre-edgar",
  "state": {
    "frontity": {
      "url": "https://alexandreedgarwp.racheledgar.com/",
      "title": "Alexandre Edgar",
      "description": "You Are That"
    }
  },
  "packages": [
    {
      "name": "mystic-seafoam-green"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://alexandreedgarwp.racheledgar.com/wp-json",
          "params": {
            acf_format: "standard",
          },
          "url": "https://alexandreedgarwp.racheledgar.com/",
          "postsPage": "/blog",
          "homepage": "/homepage", // seems like this fixed it
          "postTypes": [
            {
              type: "gallery",
              endpoint: "gallery",
              archive: "/gallery_category"
            },
            {
              type: "booking",
              endpoint: "booking",
              archive: "/booking_category"
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
