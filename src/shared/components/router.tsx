import React from "react"
import {
  Route,
  Switch,
} from "react-router"

interface Props {
  routes: Route[],
}

function Router(props: Props) {
  return (
    <Switch>
      {props.routes.map((route: Route) => <Route key={route.path} {...route} />)}
    </Switch>
  )
}

export default Router
