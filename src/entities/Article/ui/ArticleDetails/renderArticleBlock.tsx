import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case 'CODE':
            return (
                <ArticleCodeBlockComponent
                    className={cls.block}
                    key={block.id}
                    block={block}
                />
            );
        case 'IMAGE':
            return (
                <ArticleImageBlockComponent
                    className={cls.block}
                    key={block.id}
                    block={block}
                />
            );
        case 'TEXT':
            return (
                <ArticleTextBlockComponent
                    className={cls.block}
                    key={block.id}
                    block={block}
                />
            );

        default:
            return null;
    }
};
