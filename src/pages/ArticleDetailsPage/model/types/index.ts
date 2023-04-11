import { ArticleDetailsCommentsSchema } from
    'features/ArticleDetailsComment/model/types/ArticleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';

export interface ArticlesDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema,
  recommendations: ArticleDetailsPageRecommendationsSchema
}
