import axios from 'axios';
import { ArticleSortField } from 'entities/Article';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { articlesPageActions } from '../../slices/articlesPageSlice';
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

        await thunk.callThunk(new URLSearchParams('sort=title&order=asc&search=typescript'));

        expect(thunk.dispatch).toBeCalledTimes(7);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            articlesPageActions.setSort('title' as ArticleSortField),
        );
        expect(fetchArticlesList).toHaveBeenCalled();
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

        await thunk.callThunk(new URLSearchParams('sort=title&order=asc&search=typescript'));

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
