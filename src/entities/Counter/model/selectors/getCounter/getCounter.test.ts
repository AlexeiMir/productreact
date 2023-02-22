import { DeepPartial } from '@reduxjs/toolkit';
import { StateSheme } from 'app/providers/StoreProvider/config/StateSheme';
import { getCounter } from './getCounter';

describe('getCounter.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSheme> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSheme)).toEqual({ value: 10 });
    });
});
