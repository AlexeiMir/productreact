import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILES = 'article_detailes',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // +id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILES]: '/articles/', // +id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit', // +id
    [AppRoutes.NOT_FOUND]: '*',
};

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}
