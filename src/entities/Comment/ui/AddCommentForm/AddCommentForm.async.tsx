import { FC, lazy } from 'react';

import { AddCommentFormProps } from './AddCommentForm';

import lazyLoadingTimeout from '@/shared/lib/lasyloadingTimeout/lasyloadingTimeout';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
    () => lazyLoadingTimeout(import('./AddCommentForm'), 1000),
);
