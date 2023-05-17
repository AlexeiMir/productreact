import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
