import {
    ReactNode,
    DetailedHTMLProps,
    HTMLAttributes,
    ElementType,
    ComponentProps,
} from 'react';

import cls from './Flex.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32';
export type FlexWrap = 'nowrap' | 'wrap';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexOwnProps<E extends ElementType = ElementType>
    extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    wrap?: FlexWrap;
    tag?: E;
}

export type FlexProps<E extends ElementType> = FlexOwnProps<E> &
    Omit<ComponentProps<E>, keyof FlexOwnProps<E>>;

export type TagsVariants = 'div' | 'section';

const Flex = <
    E extends ElementType = TagsVariants,
    T extends TagsVariants = E extends TagsVariants ? E : never,
>(
    props: FlexProps<T>,
) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        wrap,
        tag,
        ...otherProps
    } = props;

    const Tag = tag || 'div';

    const classes = [
        className,
        cls[`justify__${justify}`],
        cls[`align__${align}`],
        cls[`direction__${direction}`],
        gap && cls[`gap${gap}`],
    ];

    const mods: Mods = {
        [cls.max]: max,
        [cls.wrap]: wrap,
    };
    return (
        <Tag className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </Tag>
    );
};

export { Flex };
