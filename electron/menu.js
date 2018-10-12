"use strict"

const { Menu, dialog } = require("electron")
const fs = require("fs")
const { extname } = require("path")

const menu = Menu.buildFromTemplate([
  {
    label: "File",
    submenu: [
      {
        label: "Open Tab",
        accelerator: "CmdOrCtrl+O",
        click(item, window) {
          dialog.showOpenDialog(window, {
            title: "Open a tab",
            buttonLabel: "Open",
            filters: [
              {
                name: "Guitar Pro",
                extensions: ["gp5"],
              },
              {
                name: "Melodist",
                extensions: ["mdst"],
              },
            ],
          }, ([path]) => {
            // Only do anything if a tab was picked.
            if (path) {
              fs.readFile(path, (err, buffer) => {
                if (err) console.error(err)
                
              })
            }
          })
        },
      },
      {
        label: "Rage Quit 😡",
        accelerator: "CmdOrCtrl+q",
        click(item, window) {
          window.focus()
          window.close()
        },
      },
    ],
  },
])

Menu.setApplicationMenu(menu)

module.exports = menu