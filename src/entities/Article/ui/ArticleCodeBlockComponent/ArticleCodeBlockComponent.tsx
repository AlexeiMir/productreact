import { memo } from 'react';

import { ArticleCodeBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/redesigned/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div className={classNames('', {}, [className])}>
                <Code text={block.code} />
            </div>
        );
    },
);

export { ArticleCodeBlockComponent };
