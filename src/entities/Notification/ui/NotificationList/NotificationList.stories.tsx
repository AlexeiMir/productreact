import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (arg) => <NotificationList {...arg} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление 1',
                    description: 'Произошло какое-то событие',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Произошло какое-то событие',
                },
            ],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление 1',
                    description: 'Произошло какое-то событие',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Произошло какое-то событие',
                },
            ],
        },
    ],
};
