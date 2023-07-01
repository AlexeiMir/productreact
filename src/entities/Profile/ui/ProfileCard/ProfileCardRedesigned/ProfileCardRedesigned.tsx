import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../../../model/types/ProfileCardProps';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card, getVStack } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack justify="center" max>
            <Text
                align="center"
                variant="error"
                title={t('Произошла ошибка при загрузке пользователя')}
                text={t('Попробуйте обновить страницу')}
            />
        </HStack>
    );
};

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card
            padding="24"
            max
            stackProps={getVStack({ gap: '32' })}
            className={classNames('', {}, [])}
        >
            <HStack justify="center" max>
                <Skeleton border="100%" width={128} height={128} />
            </HStack>
            <HStack max gap="24">
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
            </HStack>
        </Card>
    );
};

const ProfileCardRedesigned = (props: ProfileCardProps) => {
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

    return (
        <Card
            max
            border="partial"
            padding="24"
            stackProps={getVStack({ gap: '32' })}
            className={classNames('', {}, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar size={128} src={data?.avatar} />
                </HStack>
            )}
            <HStack max gap="24">
                <VStack gap="16" max>
                    <Input
                        label={t('Имя')}
                        value={data?.first}
                        readonly={readonly}
                        onChange={onChangeFirstname}
                        data-testid="ProfileCard.firstname"
                    />
                    <Input
                        label={t('Фамилия')}
                        value={data?.lastname}
                        readonly={readonly}
                        onChange={onChangeLastname}
                        data-testid="ProfileCard.lastname"
                    />
                    <Input
                        label={t('Возраст')}
                        value={data?.age}
                        readonly={readonly}
                        onChange={onChangeAge}
                    />
                    <Input
                        label={t('Город')}
                        value={data?.city}
                        readonly={readonly}
                        onChange={onChangeCity}
                    />
                </VStack>
                <VStack gap="16" max>
                    <Input
                        label={t('Имя пользователя')}
                        value={data?.username}
                        readonly={readonly}
                        onChange={onChangeUsername}
                    />
                    <Input
                        label={t('Аватар')}
                        value={data?.avatar}
                        readonly={readonly}
                        onChange={onChangeAvatar}
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </HStack>
        </Card>
    );
};

export { ProfileCardRedesigned };
