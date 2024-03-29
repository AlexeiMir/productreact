import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (val: Country) => void;
}

const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        const options = useMemo(
            () =>
                Object.entries(Country).map(([name, value]) => ({
                    content: name,
                    value,
                })),
            [],
        );

        const props = {
            key: value,
            value,
            onChange: onChangeHandler,
            label: t('Укажите вашу страну'),
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

export { CountrySelect };
