import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });
    test('should work with empty test', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
