import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/asserts/icons/Info.svg';
import AboutIconDeprecated from '@/shared/asserts/icons/about-20-20.svg';
import ArticleIconDeprecated from '@/shared/asserts/icons/article-20-20.svg';
import ArticleIcon from '@/shared/asserts/icons/article.svg';
import ProfileIcon from '@/shared/asserts/icons/avatar.svg';
import MainIcon from '@/shared/asserts/icons/home.svg';
import MainIconDeprecated from '@/shared/asserts/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/asserts/icons/profile-20-20.svg';
import { toggleFeatures } from '@/shared/lib/features';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/types/router/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            path: getRouteMain(),
            text: 'Главная',
        },
        {
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            path: getRouteAbout(),
            text: 'О сайте',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                authOnly: true,
            },
            {
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                path: getRouteArticles(),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
