import * as React from "react"

import {
  Notification,
  NotificationCarrier,
  NotificationCarrierPosition,
  Props,
  State,
} from "./notifications"

import NotificationPresenter from "./notification-presenter"

import "./notifications.scss"

interface NotificationCarriersGroupedByPosition {
  [key: NotificationCarrierPosition]: NotificationCarrier[]
}

class Notifications extends React.Component<Props, State> {

  public static defaultProps = {
    APIToken: "",
    notifications: [],
    maxShownNotifications: 3,

    acknowledgeNotification: (notificationCarrier: NotificationCarrier) =>
      console.warn("acknowledgeNotification is a noop. Will not acknowledge notification", notificationCarrier),
  }
  public notificationCarriers: NotificationCarrier[]

  public acknowledge = this.acknowledgeNotification.bind(this)

  public acknowledgeNotification(notificationCarrier: NotificationCarrier) {
    this.props.acknowledgeNotification(notificationCarrier, this.props.APIToken)
  }

  public renderNotificationComponent(notificationCarrier: NotificationCarrier) {
    return (
      <NotificationPresenter
        key={notificationCarrier.id}
        notificationCarrier={notificationCarrier}
        acknowledgeNotification={this.acknowledge}
      />
    )
  }

  public groupNotificationsInCarriers(notifications: Notification[]): NotificationCarrier[] {
    const groupedByMessage = notifications
      .reduce((out: NotificationCarrier[], notification: Notification): NotificationCarrier[] => {
        const existingIndex = out.findIndex((notificationCarrier: NotificationCarrier) =>
          notificationCarrier.notification.message === notification.message &&
          notificationCarrier.notification.title === notification.title &&
          notificationCarrier.notification.type === notification.type,
        )

        if (existingIndex < 0) {
          out.push({
            id: (Date.now() * Math.random()).toString(16),
            notification,
            count: 1,
          })
        } else { out[existingIndex].count += 1 }

        return out
      }, [])

    return groupedByMessage
  }

  public sanitiseNotification(notification: Notification): Notification {
    return {
      // Defaults are set here.
      position: "top-right",
      type: "blank",
      clickToDismiss: true,
      showFor: 3,

      // If present, defaults are overwritten here.
      ...notification,
    }
  }

  public renderNotifications(notificationCarriers: NotificationCarrier[]) {
    return notificationCarriers
      .slice(0, this.props.maxShownNotifications || 5)
      .map(this.renderNotificationComponent, this)
  }

  public groupNotificationCarriersByPosition(): NotificationCarriersGroupedByPosition {
    const saneNotifications = this.props.notifications.map(this.sanitiseNotification, this)

    return this.groupNotificationsInCarriers(saneNotifications)
      .reduce((
        out: NotificationCarriersGroupedByPosition,
        currentCarrier: NotificationCarrier,
      ): NotificationCarriersGroupedByPosition => {
        const position = currentCarrier.notification.position

        if (!Array.isArray(out[position])) {
          out[position] = []
        }

        out[position].push(currentCarrier)

        return out
      }, {})
  }

  public render() {
    const groupedByPosition = this.groupNotificationCarriersByPosition()
    return Object.keys(groupedByPosition)
      .filter((position: NotificationCarrierPosition) => groupedByPosition[position].length > 0)
      .map((position: NotificationCarrierPosition) => (
        <div className={`notification-carrier notification-carrier__${position}`} key={position}>
          {this.renderNotifications(groupedByPosition[position])}
        </div>
      ))
  }
}

export default Notifications
