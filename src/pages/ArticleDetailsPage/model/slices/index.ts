import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer }
    from '@/features/ArticleDetailsComment';
import { ArticlesDetailsPageSchema } from '../types';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
