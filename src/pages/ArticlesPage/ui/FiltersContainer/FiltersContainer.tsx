import { memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
    className?: string;
}

const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        type,
        onChangeType,
        search,
        onChangeSearch,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            className={className}
            sort={sort}
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            type={type}
            onChangeType={onChangeType}
            search={search}
            onChangeSearch={onChangeSearch}
        />
    );
});

export { FiltersContainer };
