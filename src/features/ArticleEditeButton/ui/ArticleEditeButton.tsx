import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getRouteArticleEdit } from '@/shared/types/router/router';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleEditeButtonProps {
    className?: string;
    articleId: string;
}

const ArticleEditeButton = memo((props: ArticleEditeButtonProps) => {
    const { className, articleId } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (articleId) {
            navigate(getRouteArticleEdit(articleId));
        }
    }, [articleId, navigate]);

    return <Button onClick={onEditArticle}>{t('Редактировать')}</Button>;
});

export { ArticleEditeButton };
