import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar, Input, Loader } from 'shared/ui';
import { Profile } from 'features/EditableProfileCard';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string,
  data?: Profile,
  isLoading?: boolean,
  error?: string,
  readonly?: boolean,
  onChangeFirstname?: (value: string) => void,
  onChangeLastname?: (value: string) => void,
  onChangeAge?: (value: string) => void,
  onChangeCity?: (value: string) => void,
  onChangeUsername?: (value: string) => void,
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (currency: Currency) => void,
  onChangeCountry?: (currency: Country) => void
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте обновить страницу')}
                />
            </HStack>
        );
    }

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar
                        src={data?.avatar}
                    />
                </HStack>
            )}

            <Input
                placeholder={t('Ваше имя')}
                value={data?.first}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirstname}
            />
            <Input
                placeholder={t('Ваша фамилия')}
                value={data?.lastname}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeLastname}
            />
            <Input
                placeholder={t('Введите возраст')}
                value={data?.age}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                placeholder={t('Введите город')}
                value={data?.city}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                placeholder={t('Введите имя пользователя')}
                value={data?.username}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
                placeholder={t('Поменять аватар')}
                value={data?.avatar}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};

export { ProfileCard };
