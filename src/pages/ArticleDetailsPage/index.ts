export { articleDetailsPageReducer } from './model/slices/index';
export { ArticlesDetailsPageSchema } from './model/types/index';
export { ArticleDetailsPageRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema';
export {
    articleDetailsCommentsActions,
    articleDetailsCommentsReducer,
} from '../../features/ArticleDetailsComment/model/slice/articleDetailsCommentsSlice';

export { ArticleDetailsCommentsSchema } from
    '../../features/ArticleDetailsComment/model/types/ArticleDetailsCommentsSchema';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
