import { memo } from 'react';

import { ArticleListItemProps } from '../../model/types/articleListItem';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

const ArticleListItem = memo((props: ArticleListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ArticleListItemDeprecated {...props} />}
            on={<ArticleListItemRedesigned {...props} />}
        />
    );
});

export { ArticleListItem };
