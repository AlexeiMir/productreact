import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileError } from './getProfileError';

describe('getProfileData.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: '123' },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });
    test('should work with empty test', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
