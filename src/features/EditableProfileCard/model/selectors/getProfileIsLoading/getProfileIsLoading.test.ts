import { getProfileIsLoading } from './getProfileIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileIsLoading.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    test('should work with empty test', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
