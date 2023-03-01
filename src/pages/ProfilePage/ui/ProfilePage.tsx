import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/profileSlice';

interface ProfilePageProps {
className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
