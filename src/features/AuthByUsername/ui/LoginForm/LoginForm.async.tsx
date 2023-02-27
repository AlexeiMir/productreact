import { FC, lazy } from 'react';
import lazyLoadingTimeout
    from 'shared/lib/lasyloadingTimeout/lasyloadingTimeout';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => lazyLoadingTimeout(import('./LoginForm'), 1000),
);
