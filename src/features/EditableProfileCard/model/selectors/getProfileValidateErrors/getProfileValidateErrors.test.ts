import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ValidateProfileError } from '../../consts/validateConsts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    const validateErrors = [
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.SERVER_ERROR,
    ];
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
    });
    test('should work with empty test', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
