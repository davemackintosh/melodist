// @flow

export type Redux$DispatchArgs = {
  +type: string,
  [key: string]: any,
}

export type Redux$Dispatch = (callback: Function) => Promise<*> | (args: Redux$DispatchArgs) => void

export type Redux$Store = {
  dispatch: Redux$Dispatch,
  getState: () => Object,
}