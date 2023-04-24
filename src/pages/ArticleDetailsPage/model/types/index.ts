import { ArticleDetailsCommentsSchema } from
    '@/features/ArticleDetailsComment';
import { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';

export interface ArticlesDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema,
  recommendations: ArticleDetailsPageRecommendationsSchema
}
