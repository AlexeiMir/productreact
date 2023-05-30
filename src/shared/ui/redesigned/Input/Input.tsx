import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useState,
} from 'react';

import { HStack } from '../Stack';
import { Text } from '../Text';

import cls from './Input.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean;
    placeholder?: string;
    onChange?: (value: string) => void;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    label?: string;
    size?: InputSize;
}

const Input = memo(
    ({
        className,
        value,
        onChange,
        placeholder,
        type,
        autoFocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    }: InputProps) => {
        const [isFocused, setIsFocused] = useState(false);

        useEffect(() => {
            if (autoFocus) {
                setIsFocused(true);
            }
        }, [autoFocus]);

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        const onBlur = () => {
            setIsFocused(false);
        };

        const onFocus = () => {
            setIsFocused(true);
        };

        const mods: Mods = {
            [cls.readonly]: readonly,
            [cls.focused]: isFocused,
            [cls.withAddonLeft]: Boolean(addonLeft),
            [cls.withAddonRight]: Boolean(addonRight),
        };

        const input = (
            <div
                className={classNames(cls.InputWrapper, mods, [
                    className,
                    cls[size],
                ])}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    type={type}
                    value={value || ''}
                    className={cls.input}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readonly}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
        );

        if (label) {
            return (
                <HStack gap="8" max>
                    <Text text={label} />
                    {input}
                </HStack>
            );
        }

        return input;
    },
);

export { Input };
