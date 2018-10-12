// @flow

import { connect } from "react-redux"

import Notifications from "@shared/components/notifications/notifications"
import { ACKNOWLEDGE_NOTIFICATION } from "@shared-constants/all"

import type {
  PropsCallbacks,
  PropsFromState,
  NotificationCarrier,
} from "./notifications.flow"

const mapDispatchToProps = (dispatch: Redux$Dispatch): PropsCallbacks => ({
  acknowledgeNotification: (notificationCarrier: NotificationCarrier, APIToken: string) =>
    dispatch({
      type: ACKNOWLEDGE_NOTIFICATION,
      notification: notificationCarrier.notification,
      APIToken,
    }),
})

const mapStateToProps = (state: AdminUI$State): PropsFromState => ({
  APIToken: state.genericAuth.token,
  notifications: state.appReducer.messages,
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)