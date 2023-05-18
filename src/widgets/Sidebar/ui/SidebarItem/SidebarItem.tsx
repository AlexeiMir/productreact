import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    AppLinkTheme,
    AppLink as AppLinkDeprecated,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    collapsed: boolean;
    item: SidebarItemType;
}

const SidebarItem = ({ collapsed, item }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <AppLinkDeprecated
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
            on={
                <AppLink
                    className={classNames(cls.itemRedesigned, {
                        [cls.collapsedRedesigned]: collapsed,
                    })}
                    activeClassName={cls.active}
                    to={item.path}
                >
                    <Icon Svg={item.Icon} className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            }
        />
    );
};

export { SidebarItem };
