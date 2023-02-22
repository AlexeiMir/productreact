import { DeepPartial } from '@reduxjs/toolkit';
import { StateSheme } from 'app/providers/StoreProvider/config/StateSheme';
import { CounterSheme } from '../types/counterShema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('should return increment value', () => {
        const state: CounterSheme = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('should return decrement value', () => {
        const state: CounterSheme = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
