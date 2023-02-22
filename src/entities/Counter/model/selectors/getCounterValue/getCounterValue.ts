import { createSelector } from '@reduxjs/toolkit';
import { CounterSheme } from '../../types/counterShema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSheme) => counter.value,
);
