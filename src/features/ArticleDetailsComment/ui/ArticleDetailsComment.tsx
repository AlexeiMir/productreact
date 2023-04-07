import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { AddCommentForm, Comment, CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../model/slice/addCommentFormSlice';
import { sendComment } from '../model/services/sendComment';

interface ArticleDetailsCommentProps {
  className?: string,
  commentsIsLoading?: boolean
  comments: Comment[]
}

const ArticleDetailsComment = memo((props: ArticleDetailsCommentProps) => {
    const {
        className,
        commentsIsLoading,
        comments,
    } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

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
