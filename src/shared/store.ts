import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import reducer from "./reducers"

import app from "@middleware/app"
import keyboard from "@middleware/keyboard"

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") { // No logger for production
    return applyMiddleware(
      thunk,
      app,
      keyboard,
    )
  }
  else if (typeof window === "undefined") { // No logger for SSR.
    return applyMiddleware(
      thunk,
      app,
      keyboard,
    )
       }
  else {
    return applyMiddleware(
      thunk,
      app,
      keyboard,

      createLogger(),
    )
       }
}

const store = createStore(
  reducer,
  composeWithDevTools(getMiddleware()),
)

export default store

if (module.hot) {
  module.hot.accept("./store", () => {
    const nextRootReducer = require("./store")
    store.replaceReducer(nextRootReducer)
  })
}
