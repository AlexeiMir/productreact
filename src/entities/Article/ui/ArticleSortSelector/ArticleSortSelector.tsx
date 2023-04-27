import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '../../model/consts/articleConsts';

import cls from './ArticleSortSelector.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort/sortOrder';
import { Select } from '@/shared/ui';
import { SelectOption } from '@/shared/ui/Select';

interface ArticleSortSelectorProps {
  className?: string,
  sort: ArticleSortField,
  order: SortOrder,
  onChangeOrder: (newOrder: SortOrder) => void,
  onChangeSort: (newSort: ArticleSortField) => void,
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },

    ], [t]);

    const sortFieldOptionsOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
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

    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
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
    );
});

export { ArticleSortSelector };
