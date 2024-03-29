import { HTMLAttributes, ReactNode } from 'react';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Card = (props: CardProps) => {
    const {
        className,
        children,
        max,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export { Card };
