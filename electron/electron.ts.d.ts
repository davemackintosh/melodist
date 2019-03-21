"use strict"

const { app, BrowserWindow } = require("electron")
const { resolve } = require("path")

// Add flags for extra performance and disabling extranoeous features.
app.commandLine.appendSwitch("disable-impl-side-painting", "true")
app.commandLine.appendSwitch("force-gpu-rasterization", "true")
app.commandLine.appendSwitch("allow-file-access-from-files", "true")
app.commandLine.appendSwitch("ignore-gpu-blacklist", "true")
app.commandLine.appendSwitch("enable-gpu-rasterization", "true")
app.commandLine.appendSwitch("enable-zero-copy", "true")
app.commandLine.appendSwitch("disable-software-rasterizer", "true")
app.commandLine.appendSwitch("disable-renderer-backgrounding")
app.commandLine.appendSwitch("num-raster-threads", (require("os").cpus().length).toString())

app.on("ready", () => {
  let url = "file://" + resolve(__dirname + "/index.html")
  
  if (process.env.NODE_ENV !== "production") {
    require("./dev-tools")
    url = "http://localhost:8080"
  }

  const mainWindow = new BrowserWindow({
    width: 1266,
    height: 758,
  })

  // Set up the menu.
  require("./menu")

  mainWindow.loadURL(url)
  mainWindow.openDevTools({ mode: "detach" })
  mainWindow.focus()
})