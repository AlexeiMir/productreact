import { HTMLAttributes, ReactNode } from 'react';

import {
    Flex,
    FlexAlign,
    FlexDirection,
    FlexJustify,
} from '../Stack/Flex/Flex';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24' | '32';
export type CardGap = '8' | '16' | '24' | '32';
export type CardBorder = 'round' | 'normal';

interface GetStackProps {
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: CardGap;
    direction?: FlexDirection;
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    stackProps?: GetStackProps;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'padding_0',
    '8': 'padding_8',
    '16': 'padding_16',
    '24': 'padding_24',
    '32': 'padding_32',
};

export function getHStack({
    justify,
    gap,
    direction = 'row',
    align,
}: GetStackProps) {
    return {
        justify,
        gap,
        direction,
        align,
    };
}

export function getVStack({
    justify,
    gap,
    direction = 'column',
    align,
}: GetStackProps) {
    return {
        justify,
        gap,
        direction,
        align,
    };
}

const Card = (props: CardProps) => {
    const {
        className,
        children,
        max,
        variant = 'normal',
        border = 'normal',
        padding = '8',
        stackProps,
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];
    return (
        <Flex
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[border],
            ])}
            {...otherProps}
            {...stackProps}
        >
            {children}
        </Flex>
    );
};

export { Card };
