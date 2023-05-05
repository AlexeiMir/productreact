import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    SyntheticEvent,
    useEffect,
    useState,
} from 'react';

import cls from './Input.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean;
    placeholder?: string;
    onChange?: (value: string) => void;
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
        ...otherProps
    }: InputProps) => {
        const [isFocused, setIsFocused] = useState(false);
        const [caretPosition, setCaretPosition] = useState(0);

        useEffect(() => {
            if (autoFocus) {
                setIsFocused(true);
            }
        }, [autoFocus]);

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length);
        };

        const onBlur = () => {
            setIsFocused(false);
        };

        const onFocus = () => {
            setIsFocused(true);
        };

        const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
            setCaretPosition(e.currentTarget.selectionStart || 0);
        };

        const mods: Mods = {
            [cls.readonly]: readonly,
        };

        const caretIsVisible = !readonly && isFocused;

        return (
            <div className={classNames(cls.InputWrapper, mods, [className])}>
                {placeholder && (
                    <div className={cls.placeholder}>{`${placeholder}>`}</div>
                )}
                <div className={cls.caretWrapper}>
                    <input
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus={autoFocus}
                        type={type}
                        value={value || ''}
                        className={cls.input}
                        onChange={onChangeHandler}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        readOnly={readonly}
                        {...otherProps}
                    />
                    {caretIsVisible && (
                        <span
                            style={{ left: `${caretPosition * 9}px` }}
                            className={cls.caret}
                        />
                    )}
                </div>
            </div>
        );
    },
);

export { Input };
