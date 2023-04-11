import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';

interface ProfilePageProps {
className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id = '1' } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>

        </Page>
    );
};

export default ProfilePage;
