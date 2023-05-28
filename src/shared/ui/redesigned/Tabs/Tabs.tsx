import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

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
    direction: FlexDirection;
    onTabClick: (tab: TabItem<T>) => void;
}

const typedMemo: <T>(c: T) => T = memo;

const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, direction, onTabClick } = props;
    const { t } = useTranslation();

    const clickHandler = useCallback(
        (tab: TabItem<T>) => () => onTabClick(tab),
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap="8"
            align="start"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        onClick={clickHandler(tab)}
                        className={classNames(
                            cls.tab,
                            { [cls.selected]: isSelected },
                            [],
                        )}
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});

export { Tabs };
