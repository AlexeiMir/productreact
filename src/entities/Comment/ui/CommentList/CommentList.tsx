import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo } from 'react';

import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string,
  comments?: Comment[],
  isLoading?: boolean
}

const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        <div className={classNames(cls.CommentList, {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </div>;
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.text}
                        isLoading={isLoading}
                        comment={comment}
                        className={cls.comment}
                    />
                ))
                : <Text text={t('Комментраии отсутствуют')} />}
        </div>
    );
});

export { CommentList };
