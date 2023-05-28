import { HTMLAttributes, ReactNode } from 'react';

import { FlexAlign, FlexDirection, FlexJustify } from '../Stack/Flex/Flex';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24' | '32';
export type CardGap = '8' | '16' | '24' | '32';
export type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'padding_0',
    '8': 'padding_8',
    '16': 'padding_16',
    '24': 'padding_24',
    '32': 'padding_32',
};

const mapGapToClass: Record<CardGap, string> = {
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
    '32': 'gap_32',
};

interface GetHStackProps {
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: CardGap;
    direction?: FlexDirection;
}

export function getHStack({
    justify,
    gap,
    direction = 'row',
    align,
}: GetHStackProps) {
    return [
        justify && cls[`justify__${justify}`],
        align && cls[`align__${align}`],
        cls[`direction__${direction}`],
        gap && cls[mapGapToClass[gap]],
    ];
}

export function getVStack({
    justify,
    gap,
    direction = 'column',
    align,
}: GetHStackProps) {
    return [
        justify && cls[`justify__${justify}`],
        align && cls[`align__${align}`],
        cls[`direction__${direction}`],
        gap && cls[mapGapToClass[gap]],
    ];
}

const Card = (props: CardProps) => {
    const {
        className,
        children,
        max,
        variant = 'normal',
        border = 'normal',
        padding = '8',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];
    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[border],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export { Card };
