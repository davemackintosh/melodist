import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { IntlProvider } from "react-intl"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import BaseApp from "@components/base-app/base-app"
import Router from "@components/router"
import routes from "@src/routes"
import store from "@src/shared/store"
import enGB from "@translations/en-gb"

const app = (
  <AppContainer>
    <Provider store={store}>
      <IntlProvider locale="en-gb" messages={enGB}>
        <BrowserRouter>
          <Fragment>
            <Router routes={routes} />
            <BaseApp />
          </Fragment>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  </AppContainer>
)

ReactDOM.render(app, document.getElementById("melodist-container"))

if (module.hot) {
  module.hot.accept()
}
