import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ValidateProfileError } from '../../model/consts/validateConsts';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const errors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Не указана страна'),
        [ValidateProfileError.INCORRECT_CURRENCY]: t('Не указана валюта'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Имя, фамилия, логин обязательны',
        ),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.SERVER_ERROR]: t(
            'Серверная ошибка при сохранении',
        ),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <VStack gap="16" max>
                <EditableProfileCardHeader />
                {errors?.length &&
                    errors.map((err) => (
                        <Text
                            key={err}
                            text={validateErrorTranslates[err]}
                            theme={TextTheme.ERROR}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});

export { EditableProfileCard };
