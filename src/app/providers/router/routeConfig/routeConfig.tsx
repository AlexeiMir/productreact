import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRouteProps } from '@/shared/const/router';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
} from '@/shared/types/router/router';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: getRouteMain(),
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: getRouteAbout(),
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: getRouteProfile(':id'),
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        element: <ArticlesPage />,
        path: getRouteArticles(),
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILES]: {
        element: <ArticleDetailsPage />,
        path: getRouteArticleDetails(':id'),
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        element: <ArticleEditPage />,
        path: getRouteArticleCreate(),
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        element: <ArticleEditPage />,
        path: getRouteArticleEdit(':id'),
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        element: <AdminPanelPage />,
        path: getRouteAdmin(),
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        element: <ForbiddenPage />,
        path: getRouteForbidden(),
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: '*',
    },
};
