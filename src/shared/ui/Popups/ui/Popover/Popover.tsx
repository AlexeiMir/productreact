import { Popover as HPopover } from '@headlessui/react';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Popover.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui/ui';

interface PopoverProps {
    className?: string;
    direction: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

const Popover = memo((props: PopoverProps) => {
    const { className, direction = 'bottom right', trigger, children } = props;

    const menuClasses = [mapDirectionClass[direction]];

    const { t } = useTranslation();
    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});

export { Popover };
