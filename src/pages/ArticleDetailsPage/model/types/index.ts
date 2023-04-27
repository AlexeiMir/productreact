import { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';

import { ArticleDetailsCommentsSchema } from
    '@/features/ArticleDetailsComment';

export interface ArticlesDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema,
  recommendations: ArticleDetailsPageRecommendationsSchema
}
