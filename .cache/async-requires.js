// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/joshuamartinez/Desktop/site/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/joshuamartinez/Desktop/site/src/pages/index.js")
}

exports.json = {
  "404.json": require("gatsby-module-loader?name=path---404!/Users/joshuamartinez/Desktop/site/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/joshuamartinez/Desktop/site/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/joshuamartinez/Desktop/site/.cache/json/404-html.json")
}

exports.layouts = {

}