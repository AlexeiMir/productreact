import { DeepPartial } from '@reduxjs/toolkit';
import { StateSheme } from 'app/providers/StoreProvider/config/StateSheme';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSheme> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSheme)).toEqual(10);
    });
});
