// @flow

import React from "react"
import { Switch, Route as AppRoute } from "react-router"

import type { Route } from "react-router"

type Props = {
  routes: Route[],
}

function Router(props: Props) {
  return (
    <Switch>
      { props.routes.map((route: Route) => <AppRoute key={ route.path } { ...route } />) }
    </Switch>
  )
}

export default Router