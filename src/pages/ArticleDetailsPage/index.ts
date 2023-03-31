export { articleDetailsPageReducer } from './model/slices/index';
export { ArticlesDetailsPageSchema } from './model/types/index';
export { ArticleDetailsPageRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema';
export {
    articleDetailsCommentsActions,
    articleDetailsCommentsReducer,
} from './model/slices/articleDetailsCommentsSlice';

export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
