import { memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import cls from './AppLink.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    activeClassName?: string;
    variant?: AppLinkVariant;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;
    return (
        <NavLink
            className={({ isActive }) =>
                classNames(cls.appLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            to={to}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
