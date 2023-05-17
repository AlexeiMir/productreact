import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardTheme } from '../Card/Card';

import cls from './Tabs.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    value: string;
    onTabClick: (tab: TabItem<T>) => void;
}

const typedMemo: <T>(c: T) => T = memo;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;
    const { t } = useTranslation();

    const clickHandler = useCallback(
        (tab: TabItem<T>) => () => onTabClick(tab),
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    onClick={clickHandler(tab)}
                    className={cls.tab}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    key={tab.value}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

export { Tabs };
