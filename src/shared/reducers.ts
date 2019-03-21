import { combineReducers } from "redux"

import app from "@reducers/app"
import cursor from "@reducers/cursor"
import keyboard from "@reducers/keyboard"

export default combineReducers({
  app,
  cursor,
  keyboard,
})
