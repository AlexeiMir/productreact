import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteObject } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routes';

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath[AppRoutes.ABOUT],
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: RoutePath[AppRoutes.PROFILE],
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath[AppRoutes.NOT_FOUND],
    },
};
