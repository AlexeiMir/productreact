import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleDetailsComment } from 'features/ArticleDetailsComment';
import { Button, Page } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routes';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading, getArticleCommentsError } from '../../model/selectors/comments/comments';

interface ArticleDetailsPageProps {
className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articleDetailes');
    const { id = '1' } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
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
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <ArticleDetailsComment
                    commentsIsLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
