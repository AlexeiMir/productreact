import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo } from 'react';

import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

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
