import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteObject, RouteProps } from "react-router-dom"
import { AppRoutes, RoutePath } from "shared/config/routes"


export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    element: <MainPage />,
    path: RoutePath[AppRoutes.MAIN],
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: RoutePath[AppRoutes.ABOUT],
  },
}