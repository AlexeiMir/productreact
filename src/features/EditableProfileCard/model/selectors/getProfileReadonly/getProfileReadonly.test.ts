import { getProfileReadonly } from './getProfileReadonly';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileReadonly.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: true },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
    test('should work with empty test', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
