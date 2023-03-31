import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { AppRoutes, RoutePath } from 'shared/config/routes';
import { AppRouteProps } from 'shared/config/routes/routes';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath.main,
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath.about,
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: `${RoutePath.profile}:id`,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        element: <ArticlesPage />,
        path: RoutePath.articles,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILES]: {
        element: <ArticleDetailsPage />,
        path: `${RoutePath.article_detailes}:id`,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        element: <ArticleEditPage />,
        path: `${RoutePath.article_create}`,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        element: <ArticleEditPage />,
        path: `${RoutePath.article_edit}`,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath.not_found,
    },
};
