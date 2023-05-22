import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Notification } from '../../model/types/notification';

import cls from './NotificationItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { t } = useTranslation();

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <CardDeprecated
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                    theme={CardTheme.OUTLINED}
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                    />
                </CardDeprecated>
            }
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            }
        />
    );

    if (item.href) {
        <a
            className={cls.link}
            href={item.href}
            target="_blank"
            rel="noreferrer"
        >
            {content}
        </a>;
    }
    return content;
});

export { NotificationItem };
