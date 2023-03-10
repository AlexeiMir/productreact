import { lazy } from 'react';
import lazyLoadingTimeout from '../../../shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const MainPageAsync = lazy(() => lazyLoadingTimeout(import('./MainPage'), 1000));
