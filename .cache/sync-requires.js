// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/joshuamartinez/Desktop/site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/joshuamartinez/Desktop/site/src/pages/index.js"))
}

exports.json = {
  "404.json": require("/Users/joshuamartinez/Desktop/site/.cache/json/404.json"),
  "index.json": require("/Users/joshuamartinez/Desktop/site/.cache/json/index.json"),
  "404-html.json": require("/Users/joshuamartinez/Desktop/site/.cache/json/404-html.json")
}