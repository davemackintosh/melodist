
import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import reducer from "./reducers"

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production")
    return applyMiddleware(
      thunk,
      
    )
  else if (typeof window === "undefined")
    return applyMiddleware(
      thunk,
      
    )
  else
    return applyMiddleware(
      thunk,
      
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