import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSheme } from '../config/StateSheme';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode,
  initialState?: DeepPartial<StateSheme>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSheme);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
