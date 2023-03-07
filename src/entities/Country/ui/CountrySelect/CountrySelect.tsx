import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui';
import { memo, useCallback, useMemo } from 'react';
import cls from './CountrySelect.module.scss';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country,
  readonly?: boolean,
  onChange?: (val: Country) => void,
}

const CountrySelect = memo(({
    className,
    value,
    onChange,
    readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const options = useMemo(() => Object.entries(Country).map(([name, value]) => ({
        content: name,
        value,
    })), []);
    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите вашу страну')}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});

export { CountrySelect };
