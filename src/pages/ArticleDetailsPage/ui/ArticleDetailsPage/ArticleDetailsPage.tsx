import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleDetailsComment } from 'features/ArticleDetailsComment';
import { Page } from 'widgets/Page';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import {
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
    getArticleCommentsIsLoading,
    getArticleCommentsError,
} from '../../model/selectors/comments/comments';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations/recommendations';
import { fetchArticleRecommendations } from
    '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articleDetailes');
    const { id = '1' } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const error = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target="_blank"
                />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
                <ArticleDetailsComment
                    commentsIsLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
