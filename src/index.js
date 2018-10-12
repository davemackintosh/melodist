import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

import BaseApp from "./shared/components/base-app/base-app"

const app = (
  <AppContainer>
    <BaseApp name="test" />
  </AppContainer>
)

ReactDOM.render(app, document.getElementById("melodist-container"))

if (module.hot)
  module.hot.accept()