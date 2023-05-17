import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/article/article';

import cls from './ArticleDetailsPageHeader.module.scss';

import { getArticleDetailsData } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getRouteArticleEdit,
    getRouteArticles,
} from '@/shared/types/router/router';
import { Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/deprecated/Button';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article?.id) {
                navigate(getRouteArticleEdit(article?.id));
            }
        }, [article?.id, navigate]);

        return (
            <div
                className={classNames(cls.ArticleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        className={cls.editBtn}
                        onClick={onEditArticle}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </div>
        );
    },
);

export { ArticleDetailsPageHeader };
