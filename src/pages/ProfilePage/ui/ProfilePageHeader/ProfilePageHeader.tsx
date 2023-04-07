import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <HStack gap="8">
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                        : (
                            <>
                                <Button
                                    onClick={onCancelEdit}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    onClick={onSave}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </HStack>
            )}

        </HStack>
    );
};

export { ProfilePageHeader };
