// @flow

import React from "react"
import { Switch, Route } from "react-router"

import type { RouteType } from "react-router"

type Props = {
  routes: Route[],
}

function Router(props: Props) {
  return (
    <Switch>
      { props.routes.map((route: RouteType) => <Route key={ route.path } { ...route } />) }
    </Switch>
  )
}

export default Router
