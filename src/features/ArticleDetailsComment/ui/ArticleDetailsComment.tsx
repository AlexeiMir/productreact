import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../model/selectors/addCommentFormSelectors';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../model/selectors/comments/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { sendComment } from '../model/services/sendComment';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../model/slice/addCommentFormSlice';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';

import { AddCommentForm, CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleDetailsCommentProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const ArticleDetailsComment = memo((props: ArticleDetailsCommentProps) => {
    const { className, id } = props;
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

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendComment = useCallback(() => {
        onCommentTextChange('');
        dispatch(sendComment(text || ''));
    }, [dispatch, text, onCommentTextChange]);

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Комментарии')} />
            <Suspense fallback={<Loader />}>
                <DynamicModuleLoader reducers={reducers}>
                    <AddCommentForm
                        text={text}
                        error={error}
                        onClick={onSendComment}
                        onChange={onCommentTextChange}
                    />
                </DynamicModuleLoader>
            </Suspense>
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
});

export { ArticleDetailsComment };
