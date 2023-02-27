import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('should return auth data', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { id: '1', username: 'admin' } },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({ id: '1', username: 'admin' });
    });
});
