import { Listbox as HListbox } from '@headlessui/react';
import {
    Fragment,
    ReactNode,
} from 'react';

import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

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
  className?: string
  direction?: DropdownDirection;
  label: string;
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

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button disabled={readonly} className={popupCls.trigger}>
                    <Button
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
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
