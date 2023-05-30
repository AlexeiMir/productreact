import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

        const props = {
            key: value,
            value,
            onChange: onChangeHandler,
            label: t('Укажите вашу валюту'),
            items: options,
            readonly,
            className,
            direction: 'top right' as const,
        };
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ListBoxDeprecated {...props} />}
                on={<ListBox {...props} />}
            />
        );
    },
);

export { CurrencySelect };
