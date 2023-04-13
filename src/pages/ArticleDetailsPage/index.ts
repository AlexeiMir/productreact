export { articleDetailsPageReducer } from './model/slices/index';
export type { ArticlesDetailsPageSchema } from './model/types/index';
export type { ArticleDetailsPageRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema';
export {
    articleDetailsCommentsActions,
    articleDetailsCommentsReducer,
} from '../../features/ArticleDetailsComment/model/slice/articleDetailsCommentsSlice';

export type { ArticleDetailsCommentsSchema } from
    '../../features/ArticleDetailsComment/model/types/ArticleDetailsCommentsSchema';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
