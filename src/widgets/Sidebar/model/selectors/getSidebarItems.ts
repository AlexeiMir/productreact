import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/asserts/icons/about-20-20.svg';
import ArticleIcon from '@/shared/asserts/icons/article-20-20.svg';
import MainIcon from '@/shared/asserts/icons/main-20-20.svg';
import ProfileIcon from '@/shared/asserts/icons/profile-20-20.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/types/router/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            Icon: MainIcon,
            path: getRouteMain(),
            text: 'Главная',
        },
        {
            Icon: AboutIcon,
            path: getRouteAbout(),
            text: 'О сайте',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                Icon: ProfileIcon,
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                authOnly: true,
            },
            {
                Icon: ArticleIcon,
                path: getRouteArticles(),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
