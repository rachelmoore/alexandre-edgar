const settings = {
  "name": "alexandre-edgar",
  "state": {
    "frontity": {
      "url": "https://gph.fxx.mybluehost.me/",
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
          "api": "https://gph.fxx.mybluehost.me/wp-json",
          "url": "https://gph.fxx.mybluehost.me/",
          "postsPage": "/blog",
          "homepage": "/homepage", // seems like this fixed it
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
