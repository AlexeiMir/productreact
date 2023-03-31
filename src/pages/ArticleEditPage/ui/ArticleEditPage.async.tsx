import { lazy } from 'react';
import lazyLoadingTimeout
    from 'shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const ArticleEditPageAsync = lazy(
    () => lazyLoadingTimeout(import('./ArticleEditPage'), 1000),
);
