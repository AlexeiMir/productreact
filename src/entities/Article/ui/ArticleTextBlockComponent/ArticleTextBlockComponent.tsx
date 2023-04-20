import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string,
  block: ArticleTextBlock
}

const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text
                    className={cls.title}
                    title={block.title}
                />
            )}
            {
                block.paragraphs.map((paragraph) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))
            }
        </div>
    );
});

export { ArticleTextBlockComponent };
