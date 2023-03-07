import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button
                    onClick={onEdit}
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            )
                : (
                    <>
                        <Button
                            onClick={onCancelEdit}
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            onClick={onSave}
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};

export { ProfilePageHeader };
