import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ProfileRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { getUserAuthData } from '@/entities/User';

export interface ProfileRatingProps {
className?: string
profileId: string
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const {
        className,
        profileId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRating({
        userId: userData?.id ?? '',
        profileId,
    });
    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                profileId,
                rate: starsCount,
                userId: userData?.id ?? '',
                feedback,
            });
        } catch (error) {
            console.log(error);
        }
    }, [
        rateProfileMutation,
        profileId,
        userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];
    return (
        <div className={classNames(cls.ProfileRating, {}, [className])}>
            <RatingCard
                feedbackTitle={t('Оставьте свой отзыв о профиле, это поможет улучшить качество')}
                title={t('Оцените профиль')}
                rate={rating?.rate}
                className={className}
                onAccept={onAccept}
                onCancel={onCancel}
            />
        </div>
    );
});

export default ProfileRating;
