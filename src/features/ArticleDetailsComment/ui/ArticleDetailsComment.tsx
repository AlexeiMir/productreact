import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { AddCommentForm, CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../model/slice/addCommentFormSlice';
import { sendComment } from '../model/services/sendComment';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments/comments';

interface ArticleDetailsCommentProps {
  className?: string,
  id: string,
}

const ArticleDetailsComment = memo((props: ArticleDetailsCommentProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendComment = useCallback(() => {
        onCommentTextChange('');
        dispatch(sendComment(text || ''));
    }, [
        dispatch,
        text,
        onCommentTextChange,
    ]);

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Комментарии')} />
            <AddCommentForm
                text={text}
                error={error}
                onClick={onSendComment}
                onChange={onCommentTextChange}
            />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});

export { ArticleDetailsComment };
