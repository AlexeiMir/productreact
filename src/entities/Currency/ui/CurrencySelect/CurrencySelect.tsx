import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui';
import { memo, useCallback, useMemo } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string
  value?: Currency,
  readonly?: boolean,
  onChange?: (val: Currency) => void,
}

const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const options = useMemo(() => Object.entries(Currency).map(([name, value]) => ({
        content: name,
        value,
    })), []);
    return (
        <Select
            key={value}
            value={value}
            onChange={onChangeHandler}
            label={t('Укажите вашу валюту')}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});

export { CurrencySelect };
