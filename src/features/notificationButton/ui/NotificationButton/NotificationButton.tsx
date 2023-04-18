import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo, useCallback, useState } from 'react';

import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/asserts/icons/notification-20-20.svg';
import { Button } from 'shared/ui';
import { Icon } from 'shared/ui/Icon/Icon';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { detectDevice } from 'shared/lib/detectDevice/detectDevice';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string
}

const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = detectDevice();
    console.log('isMobile', isMobile);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const mods: Mods = {
        [cls.mobile]: isMobile,
    };

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            {isMobile
                ? (
                    <>
                        {trigger}
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList className={classNames(cls.notifications, mods, [className])} />
                        </Drawer>
                    </>

                )
                : (
                    <Popover
                        className={classNames(cls.NotificationButton, {}, [className])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                )}

        </div>
    );
});

export { NotificationButton };
