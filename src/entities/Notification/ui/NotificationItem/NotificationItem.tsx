import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Notification } from '../../model/types/notification';

import cls from './NotificationItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

interface NotificationItemProps {
  className?: string,
  item: Notification
}

const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { t } = useTranslation();

    const content = (
        <Card
            className={classNames(cls.NotificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text
                title={item.title}
                text={item.description}
            />

        </Card>
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
