import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, Input } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

interface ProfileCardProps {
className?: string
}

const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    console.log('data', data);

    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    placeholder={t('Ваше имя')}
                    value={data?.first}
                    className={cls.input}
                />
                <Input
                    placeholder={t('Ваша фамилия')}
                    value={data?.lastname}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

export { ProfileCard };
