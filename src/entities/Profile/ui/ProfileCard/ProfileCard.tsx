import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../../model/types/ProfileCardProps';
import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';

import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from './ProfileCardRedesigned/ProfileCardRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

const ProfileCard = (props: ProfileCardProps) => {
    const { isLoading, error } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ProfileCardDeprecatedLoader />}
                on={<ProfileCardRedesignedSkeleton />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ProfileCardDeprecatedError />}
                on={<ProfileCardRedesignedError />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ProfileCardDeprecated {...props} />}
            on={<ProfileCardRedesigned {...props} />}
        />
    );
};

export { ProfileCard };
