import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';

import { useTranslation } from 'react-i18next';

import { memo, ReactNode } from 'react';

import { DropdownDirection } from 'shared/types/ui/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
  className?: string,
  direction: DropdownDirection,
  trigger: ReactNode,
  children: ReactNode,
}

const Popover = memo((props: PopoverProps) => {
    const {
        className,
        direction = 'bottom right',
        trigger,
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    const { t } = useTranslation();
    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>{ trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});

export { Popover };
