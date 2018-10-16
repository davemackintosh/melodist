
import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import reducer from "./reducers"

import app from "@middleware/app"

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") // No logger for production
    return applyMiddleware(
      thunk,
      app,
    )
  else if (typeof window === "undefined") // No logger for SSR.
    return applyMiddleware(
      thunk,
      app,
    )
  else
    return applyMiddleware(
      thunk,
      app,
      
      createLogger(),
    )
}

const store = createStore(
  reducer,
  composeWithDevTools(getMiddleware())
)

export default store

if (module.hot) {
  module.hot.accept("./store", () => {
    const nextRootReducer = require("./store")
    store.replaceReducer(nextRootReducer)
  })
}
