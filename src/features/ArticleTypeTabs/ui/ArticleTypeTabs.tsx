import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <TabsDeprecated
                    onTabClick={onChangeType}
                    tabs={typeTabs}
                    value={value}
                />
            }
            on={
                <Tabs
                    direction="column"
                    onTabClick={onChangeType}
                    tabs={typeTabs}
                    value={value}
                />
            }
        />
    );
});

export { ArticleTypeTabs };
