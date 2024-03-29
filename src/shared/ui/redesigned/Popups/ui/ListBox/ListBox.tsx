import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

import ArrowIcon from '@/shared/asserts/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui/ui';

export interface ListBoxItem<T> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T> {
    items?: ListBoxItem<T>[];
    value?: string;
    defaultValue?: string;
    onChange: (value: T) => void;
    className?: string;
    direction?: DropdownDirection;
    label?: string;
    readonly?: boolean;
}

const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        direction = 'bottom right',
        items,
        value,
        defaultValue,
        label,
        readonly,
        onChange,
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];
    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value],
    );

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button
                    disabled={readonly}
                    className={popupCls.trigger}
                >
                    <Button
                        addonRight={<Icon Svg={ArrowIcon} />}
                        variant="filled"
                        disabled={readonly}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};

export { ListBox };
