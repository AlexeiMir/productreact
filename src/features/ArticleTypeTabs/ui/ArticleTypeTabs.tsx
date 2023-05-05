import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: TabItem<ArticleType>) => void;
}

const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, onChangeType, value } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: 'ALL',
                content: t('Все статьи'),
            },
            {
                value: 'IT',
                content: t('Айти'),
            },
            {
                value: 'ECONOMICS',
                content: t('Экономика'),
            },
            {
                value: 'SCIENCE',
                content: t('Наука'),
            },
        ],
        [t],
    );
    return (
        <div className={classNames('', {}, [className])}>
            <Tabs onTabClick={onChangeType} tabs={typeTabs} value={value} />
        </div>
    );
});

export { ArticleTypeTabs };
