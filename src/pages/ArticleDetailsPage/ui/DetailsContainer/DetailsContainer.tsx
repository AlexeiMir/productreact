import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id = '1' } = useParams<{ id: string }>();

    return (
        <Card max padding="24" border="round" className={className}>
            <ArticleDetails id={id} />
        </Card>
    );
});

export { DetailsContainer };
