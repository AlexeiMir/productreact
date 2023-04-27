import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageIsLoading,
    getArticlesPageHasMore,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {
            dispatch, getState,
        } = thunkAPI;
        const isLoading = getArticlesPageIsLoading(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
