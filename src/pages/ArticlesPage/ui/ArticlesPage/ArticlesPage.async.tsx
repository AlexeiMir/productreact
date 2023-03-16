import { lazy } from 'react';
import lazyLoadingTimeout from 'shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const ArticlesPageAsync = lazy(() => lazyLoadingTimeout(import('./ArticlesPage'), 1000));
