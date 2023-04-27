import {
    ReactNode,
    DetailedHTMLProps,
    HTMLAttributes,
    ElementType,
    ComponentProps,
} from 'react';

import cls from './Flex.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexOwnProps<E extends ElementType = ElementType> extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  wrap?: boolean;
  tag?: E;
}

export type FlexProps<E extends ElementType> = FlexOwnProps<E> & Omit<ComponentProps<E>, keyof FlexOwnProps<E>>;

export type TagsVariants = 'div' | 'section';

const Flex = <
E extends ElementType = TagsVariants,
T extends TagsVariants = E extends TagsVariants? E : never>(props: FlexProps<T>) => {
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
        <Tag
            className={classNames(
                cls.Flex,
                mods,
                classes,
            )}
        >
            {children}
        </Tag>
    );
};

export { Flex };
