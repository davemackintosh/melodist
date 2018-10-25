import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { AppContainer } from "react-hot-loader"
import { IntlProvider } from "react-intl"
import { BrowserRouter } from "react-router-dom"

import Router from "@components/router"
import BaseApp from "@components/base-app/base-app"
import enGB from "@translations/en-gb"
import routes from "@src/routes"
import store from "@src/shared/store"

const app = (
  <AppContainer>
    <Provider store={ store }>
      <IntlProvider locale="en-gb" messages={ enGB }>
        <BrowserRouter>
          <Fragment>
            <Router routes={ routes } />
            <BaseApp />
          </Fragment>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  </AppContainer>
)

ReactDOM.render(app, document.getElementById("melodist-container"))

if (module.hot)
  module.hot.accept()
