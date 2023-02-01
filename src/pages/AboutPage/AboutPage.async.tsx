import { lazy } from 'react';
import lazyLoadingTimeout from '../utils/lasyloadingTimeout';


export const AboutPageAsync = lazy(() => lazyLoadingTimeout(import('./AboutPage'), 1000));