import { memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ViewSelectorContainerProps {
    className?: string;
}

const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
    const { className } = props;
    const { onChangeView, view } = useArticleFilters();
    return (
        <ArticleViewSelector
            className={className}
            onViewClick={onChangeView}
            view={view}
        />
    );
});

export { ViewSelectorContainer };
