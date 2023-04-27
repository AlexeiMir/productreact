import { createAsyncThunk } from '@reduxjs/toolkit';

import { articleDetailsCommentsActions } from '../slice/articleDetailsCommentsSlice';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

// First, create the thunk
export const sendComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'ArticleDetailsComment/sendComment',
    async (text, thunkAPI) => {
        const {
            dispatch, rejectWithValue, extra, getState,
        } = thunkAPI;
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!text || !userData || !article) {
            return rejectWithValue('No data');
        }
        try {
            const response = await extra.api.post<Comment>(
                '/comments',
                {
                    articleId: article.id,
                    userId: userData?.id,
                    text,
                },
            );
            if (!response.data) {
                throw new Error();
            }

            const newComment: Comment = {
                id: response.data.id,
                text: response.data.text,
                user: userData,
            };

            dispatch(articleDetailsCommentsActions.addComment(newComment));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
