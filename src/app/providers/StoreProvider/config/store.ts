import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSheme } from './StateSheme';

export function createReduxStore(initialState: StateSheme) {
    const rootReducer: ReducersMapObject<StateSheme> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,

    });
}
