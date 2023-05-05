import { FC, lazy } from 'react';

import { LoginFormProps } from './LoginForm';

import lazyLoadingTimeout from '@/shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() =>
    lazyLoadingTimeout(import('./LoginForm'), 1000),
);
