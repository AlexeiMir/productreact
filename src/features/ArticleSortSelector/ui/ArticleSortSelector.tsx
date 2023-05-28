import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '../../../entities/Article/model/consts/articleConsts';

import cls from './ArticleSortSelector.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort/sortOrder';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptionsOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    className={classNames(
                        cls.ArticleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <Select
                        onChange={onChangeSort}
                        value={sort}
                        options={sortFieldOptionsOptions}
                        label={t('Сортировать ПО')}
                    />
                    <Select
                        onChange={onChangeOrder}
                        value={order}
                        options={orderOptions}
                        label={t('по')}
                    />
                </div>
            }
            on={
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className,
                    ])}
                >
                    <VStack gap="8">
                        <Text text={t('Сортировать по:')} />
                        <ListBox
                            onChange={onChangeSort}
                            value={sort}
                            items={sortFieldOptionsOptions}
                        />
                        <ListBox
                            onChange={onChangeOrder}
                            value={order}
                            items={orderOptions}
                        />
                    </VStack>
                </div>
            }
        />
    );
});

export { ArticleSortSelector };
