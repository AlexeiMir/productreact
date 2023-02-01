import { lazy } from 'react';
import lazyLoadingTimeout from '../utils/lasyloadingTimeout';


export const MainPageAsync = lazy(() => lazyLoadingTimeout(import('./MainPage'), 1000));