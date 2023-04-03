import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo } from 'react';

import { AppLink, Avatar } from 'shared/ui';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RoutePath } from 'shared/config/routes';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string,
  comment?: Comment,
  isLoading?: boolean,
}

const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;
    const { t } = useTranslation();

    if (!comment) {
        return null;
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        height={30}
                        width={30}
                        border="50%"
                    />
                    <Skeleton
                        height={16}
                        width={100}
                    />
                </div>
                <Skeleton
                    className={cls.text}
                    height={16}
                    width="100%"
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
                {comment?.user.avatar
                    ? <Avatar src={comment?.user.avatar} size={30} />
                    : null}
                <Text title={comment?.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});

export { CommentCard };