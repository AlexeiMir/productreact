import { lazy } from 'react';
import lazyLoadingTimeout
    from 'shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const AboutPageAsync = lazy(
    () => lazyLoadingTimeout(import('./AboutPage'), 1000),
);
