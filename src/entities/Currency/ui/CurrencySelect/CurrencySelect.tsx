import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (val: Currency) => void;
}

const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: Currency) => {
                onChange?.(value);
            },
            [onChange],
        );

        const options = useMemo(
            () =>
                Object.entries(Currency).map(([name, value]) => ({
                    content: name,
                    value,
                })),
            [],
        );
        return (
            <ListBox
                key={value}
                value={value}
                onChange={onChangeHandler}
                label={t('Укажите вашу валюту')}
                items={options}
                readonly={readonly}
                className={classNames('', {}, [className])}
            />
        );
    },
);

export { CurrencySelect };
