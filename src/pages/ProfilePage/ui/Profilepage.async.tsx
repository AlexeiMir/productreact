import { lazy } from 'react';
import lazyLoadingTimeout
    from 'shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const ProfilePageAsync = lazy(
    () => lazyLoadingTimeout(import('./ProfilePage'), 1000),
);
