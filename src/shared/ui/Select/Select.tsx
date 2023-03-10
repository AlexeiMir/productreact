import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string,
  content: string,
}

interface SelectProps {
className?: string
  label?: string,
  value?: string,
  readonly?: boolean,
  onChange?: (value: string) => void,
  options: SelectOption[]
}

const Select = memo((props: SelectProps) => {
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
        onChange?.(e.target.value);
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
