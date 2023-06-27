import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { getRouteProfile } from '@/shared/types/router/router';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (!comment) {
        return null;
    }

    if (isLoading) {
        return (
            <div
                data-testid="CommentCard.Loading"
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton className={cls.text} height={16} width="100%" />
            </div>
        );
    }
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <VStack
                    data-testid="CommentCard.Content"
                    gap="8"
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment?.user.id)}
                        className={cls.header}
                    >
                        {comment?.user.avatar ? (
                            <Avatar src={comment?.user.avatar} size={30} />
                        ) : null}
                        <TextDeprecated title={comment?.user.username} />
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment?.text} />
                </VStack>
            }
            on={
                <Card padding="24" border="round" max>
                    <VStack
                        data-testid="CommentCard.Content"
                        gap="8"
                        max
                        className={classNames(cls.CommentCardRedesigned, {}, [
                            className,
                        ])}
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap="8">
                                {comment.user.avatar ? (
                                    <Avatar
                                        src={comment.user.avatar}
                                        size={30}
                                    />
                                ) : null}
                                <Text text={comment?.user.username} bold />
                            </HStack>
                        </AppLink>
                        <Text text={comment?.text} />
                    </VStack>
                </Card>
            }
        />
    );
});

export { CommentCard };
