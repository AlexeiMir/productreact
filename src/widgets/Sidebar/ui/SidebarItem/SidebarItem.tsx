import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  collapsed: boolean,
  item: SidebarItemType
}

const SidebarItem = ({ collapsed, item }: SidebarItemProps) => {
    const {
        path,
        text,
        Icon,
    } = item;
    const { t } = useTranslation();
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
