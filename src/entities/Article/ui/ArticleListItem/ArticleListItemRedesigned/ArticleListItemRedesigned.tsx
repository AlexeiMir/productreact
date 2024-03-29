import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../../../model/types/articleListItem';

import cls from './ArticleListItemRedesigned.module.scss';

import EyeIcon from '@/shared/asserts/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getRouteArticleDetails } from '@/shared/types/router/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card, getVStack } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();
    const userInfo = (
        <>
            <Avatar
                size={30}
                src={article.user.avatar}
                className={cls.avatar}
            />
            <Text bold text={article.user.username} className={cls.username} />
        </>
    );

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === 'TEXT',
        ) as ArticleTextBlock;
        return (
            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                stackProps={getVStack({ gap: '16', align: 'start' })}
            >
                <HStack gap="8" max>
                    {userInfo}
                    <Text text={article.createdAt} className={cls.date} />
                </HStack>
                <Text text={article.title} bold />
                <Text text={article.subtitle} size="s" />
                <AppImage
                    src={article.img}
                    fallback={<Skeleton width="100%" height={250} />}
                    alt={article.title}
                    className={cls.img}
                />
                {textBlock?.paragraphs && (
                    <Text
                        text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        className={cls.textBlock}
                    />
                )}
                <HStack max justify="between">
                    <AppLink
                        target={target}
                        to={getRouteArticleDetails(article.id)}
                    >
                        <Button variant="outline">
                            {t('Читать далее ...')}
                        </Button>
                    </AppLink>
                    {views}
                </HStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            data-testid="ArticleListItem"
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card
                className={cls.card}
                border="round"
                padding="0"
                stackProps={getVStack({ gap: '8', align: 'stretch' })}
            >
                <AppImage
                    src={article.img}
                    fallback={<Skeleton width="100%" height={200} />}
                    alt={article.title}
                    className={cls.img}
                />
                <VStack className={cls.info} gap="4">
                    <Text text={article.title} className={cls.title} />
                    <VStack gap="4" className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});

export { ArticleListItemRedesigned };
