import { lazy } from 'react';
import lazyLoadingTimeout from 'shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const ArticleDetailsPageAsync = lazy(() => lazyLoadingTimeout(import('./ArticleDetailsPage'), 1000));
