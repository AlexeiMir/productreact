import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T> {
  value: T,
  content: string,
}

interface SelectProps<T> {
  className?: string
  label?: string,
  value?: T,
  readonly?: boolean,
  onChange?: (value: T) => void,
  options: SelectOption<T>[]
}

const typedMemo: <T>(c: T) => T = memo;

const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        value,
        onChange,
        options,
        readonly,
    } = props;

    const mods: Mods = {};

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            value={opt.value}
            className={cls.option}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                onChange={onChangeHandler}
                disabled={readonly}
                value={value}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
});

export { Select };
