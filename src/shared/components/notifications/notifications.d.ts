import * as React from "react"

export interface PropsCallbacks {
  acknowledgeNotification: (notificationCarrier: NotificationCarrier, APIToken: string) => void,
}

export interface PropsFromState {
  APIToken: string,
}

export interface Props {
  maxShownNotifications?: number,
  className?: string,
  notifications: Notification[],

  ...PropsCallbacks,
  ...PropsFromState,
}

export type NotificationCarrierPosition = "top-left" | "top-center" | "top-right" |
                                          "middle-left" | "middle-center" | "middle-right" |
                                          "bottom-left" | "bottom-center" | "bottom-right"

export interface NotificationCarrier {
  id: string,
  notification: Notification,
  count: number,
}

export interface Notification {
  /**
   * Title for the notification to be shown with.
   */
  title?: string,

  /**
   * The message to display.
   */
  message: string,

  /**
   * The position of the notification on the screen.
   * Default is top-right.
   */
  position?: NotificationCarrierPosition,

  /**
   * The type of notification to display.
   * Default is blank.
   */
  type?: "info" | "warning" | "error" | "blank",

  /**
   * Clicking the notification will dismiss it.
   * Default is true.
   */
  clickToDismiss?: boolean,

  /**
   * Show notification for this many seconds.
   * Default is 3.
   */
  showFor?: number,

  /**
   * The route clicking this notification goes to.
   * Default is null.
   */
  notificationFrom?: string,
}
