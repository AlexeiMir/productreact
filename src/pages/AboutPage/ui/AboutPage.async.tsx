import { lazy } from 'react';
import lazyLoadingTimeout from '../../lib/lasyloadingTimeout';

export const AboutPageAsync = lazy(() => lazyLoadingTimeout(import('./AboutPage'), 1000));
