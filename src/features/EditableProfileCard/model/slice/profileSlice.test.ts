import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileSchema } from '../types/profile';

import { profileActions, profileReducer } from '../slice/profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileError } from '../consts/validateConsts';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ readonly: false });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
state as ProfileSchema,
profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(
state as ProfileSchema,
profileActions.updateProfile({ username: '1234' }),
        )).toEqual({
            form: { username: '1234' },
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
state as ProfileSchema,
updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
        };
        expect(profileReducer(
state as ProfileSchema,
updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
