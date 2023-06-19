import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTextBlock } from '../../model/types/article';

import cls from './ArticleTextBlockComponent.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                className={cls.title}
                                title={block.title}
                            />
                        }
                        on={<Text className={cls.title} title={block.title} />}
                    />
                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        on={
                            <Text
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);

export { ArticleTextBlockComponent };
