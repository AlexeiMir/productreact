import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../../model/types/ProfileCardProps';

import cls from './ProfileCardDeprecated.module.scss';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <TextDeprecated
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке пользователя')}
                text={t('Попробуйте обновить страницу')}
            />
        </HStack>
    );
};
export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.loading])}
        >
            <LoaderDeprecated />
        </HStack>
    );
};

const ProfileCardDeprecated = (props: ProfileCardProps) => {
    const {
        className,
        data,
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

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}

            <InputDeprecated
                placeholder={t('Ваше имя')}
                value={data?.first}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                placeholder={t('Ваша фамилия')}
                value={data?.lastname}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                placeholder={t('Введите возраст')}
                value={data?.age}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <InputDeprecated
                placeholder={t('Введите город')}
                value={data?.city}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <InputDeprecated
                placeholder={t('Введите имя пользователя')}
                value={data?.username}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <InputDeprecated
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

export { ProfileCardDeprecated };
