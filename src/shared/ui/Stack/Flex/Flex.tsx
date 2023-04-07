import {
    ReactNode,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean
  wrap?: boolean
}

const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        wrap,

    } = props;

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
        <div
            className={classNames(
                cls.Flex,
                mods,
                classes,
            )}
        >
            {children}
        </div>
    );
};

export { Flex };
