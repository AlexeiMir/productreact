import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Dropdown.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui/ui';

interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    href?: string;
    onClick?: () => void;
}

interface DropdownProps {
    className?: string;
    direction: DropdownDirection;
    trigger: ReactNode;
    items: DropdownItem[];
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Dropdown = (props: DropdownProps) => {
    const { className, direction = 'bottom right', trigger, items } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [className],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={`dropdown-key-index${index}`}
                                disabled={item.disabled}
                                as={AppLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={`dropdown-key-index${index}`}
                            as={Fragment}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export { Dropdown };
