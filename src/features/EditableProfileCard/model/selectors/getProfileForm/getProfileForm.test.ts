import { getProfileForm } from './getProfileForm';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileForm.test', () => {
    const form = {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
    };
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { form },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty test', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
