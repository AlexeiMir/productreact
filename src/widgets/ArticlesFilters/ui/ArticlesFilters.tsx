import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticlesFilters.module.scss';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/asserts/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort/sortOrder';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Card } from '@/shared/ui/redesigned/Card';
import { getVStack } from '@/shared/ui/redesigned/Card/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    type: ArticleType;
    onChangeType: (type: TabItem<ArticleType>) => void;
    search?: string | number;
    onChangeSearch?: (value: string) => void;
}

const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        type,
        onChangeType,
        search,
        onChangeSearch,
    } = props;
    const { t } = useTranslation();
    return (
        <Card
            padding="24"
            stackProps={getVStack({ gap: '32' })}
            className={classNames(cls.ArticlesFilters, {}, [className])}
        >
            <Input
                value={search}
                onChange={onChangeSearch}
                placeholder={t('Поиск')}
                addonLeft={<Icon Svg={SearchIcon} />}
            />
            <ArticleTypeTabs
                onChangeType={onChangeType}
                value={type}
                className={cls.tabs}
            />
            <ArticleSortSelector
                order={order}
                sort={sort}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
            />
        </Card>
    );
});

export { ArticlesFilters };
