import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { AppRoutes, RoutePath } from 'shared/config/routes';
import { AppRouteProps } from 'shared/config/routes/routes';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
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
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath[AppRoutes.NOT_FOUND],
    },
};
