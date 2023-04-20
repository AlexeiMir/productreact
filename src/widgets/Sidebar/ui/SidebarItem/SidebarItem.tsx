import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLink } from '@/shared/ui';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
  collapsed: boolean,
  item: SidebarItemType
}

const SidebarItem = ({ collapsed, item }: SidebarItemProps) => {
    const {
        path,
        text,
        Icon,
        authOnly,
    } = item;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={path}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>
                {t(text)}
            </span>
        </AppLink>
    );
};

export { SidebarItem };
