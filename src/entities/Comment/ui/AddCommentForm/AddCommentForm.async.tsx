import { FC, lazy } from 'react';
import lazyLoadingTimeout from '@/shared/lib/lasyloadingTimeout/lasyloadingTimeout';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
    () => lazyLoadingTimeout(import('./AddCommentForm'), 1000),
);
