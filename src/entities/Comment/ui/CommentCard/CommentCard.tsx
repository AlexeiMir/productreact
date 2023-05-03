import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { getRouteProfile } from '@/shared/types/router/router';
import { AppLink, Avatar } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

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
            <div
                data-testid="CommentCard.Loading"
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
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
        <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment?.user.id)} className={cls.header}>
                {comment?.user.avatar
                    ? <Avatar src={comment?.user.avatar} size={30} />
                    : null}
                <Text title={comment?.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});

export { CommentCard };
