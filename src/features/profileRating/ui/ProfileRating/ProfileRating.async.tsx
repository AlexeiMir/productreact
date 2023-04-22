import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ProfileRatingProps } from './ProfileRating';

export const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
        <ProfileRatingLazy {...props} />
    </Suspense>
);
