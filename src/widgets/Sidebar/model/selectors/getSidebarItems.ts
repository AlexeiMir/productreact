import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routes';
import AboutIcon from '@/shared/asserts/icons/about-20-20.svg';
import MainIcon from '@/shared/asserts/icons/main-20-20.svg';
import ProfileIcon from '@/shared/asserts/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/asserts/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                Icon: MainIcon,
                path: RoutePath.main,
                text: 'Главная',
            },
            {
                Icon: AboutIcon,
                path: RoutePath.about,
                text: 'О сайте',
            },
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    Icon: ProfileIcon,
                    path: RoutePath.profile + userData.id,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    Icon: ArticleIcon,
                    path: RoutePath.articles,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
