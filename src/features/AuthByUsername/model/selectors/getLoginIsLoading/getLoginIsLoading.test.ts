import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });
    test('should work with empty test', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
