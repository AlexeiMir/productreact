import { combineReducers } from '@reduxjs/toolkit';

import { ArticlesDetailsPageSchema } from '../types';

import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

import { articleDetailsCommentsReducer }
    from '@/features/ArticleDetailsComment';

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
