import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/userSchema';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        try {
            const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (!userId) {
                return rejectWithValue('');
            }

            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
