import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id = '1' } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ProfilePage"
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
