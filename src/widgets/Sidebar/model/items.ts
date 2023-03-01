import React from 'react';
import { RoutePath } from 'shared/config/routes';
import AboutIcon from 'shared/asserts/icons/about-20-20.svg';
import MainIcon from 'shared/asserts/icons/main-20-20.svg';
import ProfileIcon from 'shared/asserts/icons/profile-20-20.svg';

export interface SidebarItemType {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
  path: string,
  text: string
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        Icon: ProfileIcon,
        path: RoutePath.profile,
        text: 'Профиль',
    },
];
