import WelcomeScreen from "@components/welcome/welcome"
import Piece from "@components/piece/piece"

const routes = [
  {
    path: "/",
    exact: true,
    component: Piece,
  },
  {
    path: "/welcome",
    exact: true,
    component: WelcomeScreen,
  },
]

export default routes
