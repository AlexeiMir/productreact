import {
    ChangeEvent,
    InputHTMLAttributes,
    memo, SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string,
  value?: string,
  autoFocus?: boolean,
  placeholder?: string,
  onChange?: (value: string) => void
}

const Input = memo(({
    className,
    value,
    onChange,
    placeholder,
    type,
    autoFocus,
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

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
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
                />
                {isFocused && (
                    <span
                        style={{ left: `${caretPosition * 9}px` }}
                        className={cls.caret}
                    />
                )}
            </div>
        </div>
    );
});

export { Input };
