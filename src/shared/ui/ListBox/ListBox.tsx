import { classNames } from 'shared/lib/classNames/classNames';

import { Listbox as HListbox } from '@headlessui/react';
import {
    Fragment,
    ReactNode,
} from 'react';

import cls from './ListBox.module.scss';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';

type DropdownDirection = 'top' | 'bottom';

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
        direction = 'top',
        items,
        value,
        defaultValue,
        label,
        readonly,
        onChange,
    } = props;

    const optionsClasses = [cls[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button disabled={readonly} className={cls.trigger}>
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
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
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
