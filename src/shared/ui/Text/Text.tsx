import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

// type ValueOf<T> = T[keyof T]

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

// export const textSize = {
//     M: 'size_m',
//     L: 'size_l',
//     XL: 'size_xl',
// } as const;

// export type TextSize = ValueOf<typeof textSize>

type HeaderTagType = 'h1' | 'h2' | 'h3';

interface TextProps {
className?: string,
title?: string,
  text?: string,
  theme?: TextTheme,
  align?: TextAlign,
  size?: TextSize
}

const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
        [TextSize.S]: 'h3',
        [TextSize.M]: 'h2',
        [TextSize.L]: 'h1',
    };

    const HeaderTag = mapSizeToHeaderTag[size];
    return (
        <div className={classNames(
            cls.Text,
            {},
            [className, cls[theme], cls[align], cls[size]],
        )}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export { Text };
