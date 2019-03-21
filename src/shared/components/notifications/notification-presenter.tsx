import classes from "classnames"
import React, { Component } from "react"

import { NotificationCarrier } from "./notifications"

interface Props {
  notificationCarrier: NotificationCarrier,
  acknowledgeNotification: (notificationCarrier: NotificationCarrier) => void,
}

interface State {
  opacity: string,
}

class NotificationPresenter extends Component<Props, State> {
  public linksTo = React.createRef()

  public state = {
    opacity: "1",
  }

  public componentWillUnmount() {
    this.setState({
      opacity: "0",
    })
  }

  public render() {
    const notificationCarrier = this.props.notificationCarrier
    const type = notificationCarrier.notification.type || "blank"
    const position = notificationCarrier.notification.position || "top-right"

    const classNames = classes({
      "notification": true,
      "notification__click-to-dismiss": notificationCarrier.notification.clickToDismiss,
      [`notification__${type}`]: true,
      [`notification__${position}`]: true,
    })

    const showFor = notificationCarrier.notification.showFor ? notificationCarrier.notification.showFor * 1000 : 3000
    const timerRef = typeof window === "undefined"
      ? null
      : setTimeout(() => this.props.acknowledgeNotification(notificationCarrier), showFor)

    let linksTo = null
    let onClick = () => {
      if (timerRef) {
        clearTimeout(timerRef)
      }

      if (notificationCarrier.notification.clickToDismiss) {
        this.props.acknowledgeNotification(notificationCarrier)
      }
    }

    if (notificationCarrier.notification.notificationFrom) {
      linksTo = (
        <a
          className="link"
          ref={this.linksTo}
          href={notificationCarrier.notification.notificationFrom}
          target="_blank"
          rel="noopener noreferrer"
        >
          See notification
        </a>
      )

      onClick = () => {
        if (timerRef) {
          clearTimeout(timerRef)
        }

        if (notificationCarrier.notification.clickToDismiss) {
          this.props.acknowledgeNotification(notificationCarrier)
        }

        this.linksTo.current.click()
      }
    }

    const title = !notificationCarrier.notification.title
      ? null
      : (
        <span className="header--title">
          {notificationCarrier.notification.title}
        </span>
      )

    const badge = notificationCarrier.count <= 1
      ? null
      : (
        <span className="header--badge">
          {notificationCarrier.count}
        </span>
      )

    return (
      <div
        onClick={onClick}
        className={classNames}
        key={notificationCarrier.id}
        style={{ opacity: this.state.opacity }}
      >
        <div className="header">
          {title}
          {badge}
        </div>

        <div className="body">
          {notificationCarrier.notification.message}
        </div>

        <div className="footer">
          {linksTo}
        </div>
      </div>
    )
  }
}

export default NotificationPresenter
