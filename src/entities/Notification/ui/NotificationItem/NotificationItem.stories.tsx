import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (arg) => (
    <NotificationItem {...arg} />
);

export const Normal = Template.bind({});
Normal.args = {
    item: {
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
        userId: '1',
        id: '1',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
        userId: '1',
        id: '1',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
