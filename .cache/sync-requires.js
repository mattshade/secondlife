const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/matthewshade/secondlife/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/matthewshade/secondlife/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/matthewshade/secondlife/src/pages/contact.js"))),
  "component---src-pages-donate-js": hot(preferDefault(require("/Users/matthewshade/secondlife/src/pages/donate.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/matthewshade/secondlife/src/pages/index.js"))),
  "component---src-pages-mission-js": hot(preferDefault(require("/Users/matthewshade/secondlife/src/pages/mission.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/matthewshade/secondlife/src/pages/success.js")))
}

