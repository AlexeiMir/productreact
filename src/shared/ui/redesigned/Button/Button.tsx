import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import cls from './Button.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        variant = 'outline',
        square,
        disabled,
        fullWidth,
        size = 'm',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[size],
                cls[variant],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
