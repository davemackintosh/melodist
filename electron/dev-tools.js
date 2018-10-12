const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
  REACT_PERF,
} = require("electron-devtools-installer")

Promise.all([
  installExtension(REDUX_DEVTOOLS),
  installExtension(REACT_PERF),
  installExtension(REACT_DEVELOPER_TOOLS),
])
  .then((names) => console.log(`Added Extensions:  ${JSON.stringify(names)}`))
  .catch((err) => console.log("An error occurred: ", err))