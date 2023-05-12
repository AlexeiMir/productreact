import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    try {
        const response = await extra.api.post<User>('/login', {
            username,
            password,
        });
        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
