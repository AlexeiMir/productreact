import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
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
        <ListBox
            key={value}
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите вашу страну')}
            items={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});

export { CountrySelect };
