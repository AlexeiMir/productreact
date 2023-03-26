import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('first inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                entities: {},
                ids: [],
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });

    test('fetchAritcleList not called, already inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                entities: {},
                ids: [],
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
