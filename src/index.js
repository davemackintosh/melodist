import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { IntlProvider } from "react-intl"
import { BrowserRouter } from "react-router-dom"

import Router from "@components/router"
import BaseApp from "@components/base-app/base-app"
import enGB from "@translations/en-gb"
import routes from "@src/routes"

const app = (
  <AppContainer>
    <IntlProvider locale="en-gb" messages={ enGB }>
      <BrowserRouter>
        <Fragment>
          <Router routes={ routes } />
          <BaseApp />
        </Fragment>
      </BrowserRouter>
    </IntlProvider>
  </AppContainer>
)

ReactDOM.render(app, document.getElementById("melodist-container"))

if (module.hot)
  module.hot.accept()