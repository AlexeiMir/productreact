import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleAdditionalInfo.module.scss';

import { User } from '@/entities/User';
import { ArticleEditeButton } from '@/features/ArticleEditeButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    articleId: string;
}

const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, articleId } = props;
    const { t } = useTranslation();
    return (
        <VStack
            gap="32"
            className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
        >
            <HStack gap="8">
                <Avatar
                    gap="8"
                    username={<Text text={author.username} bold />}
                    size={32}
                />
                <Text text={createdAt} />
            </HStack>
            <ArticleEditeButton articleId={articleId} />
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
});

export { ArticleAdditionalInfo };
