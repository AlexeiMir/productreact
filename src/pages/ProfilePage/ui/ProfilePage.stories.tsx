import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
// import avatar from '@/shared/asserts/tests/storybook.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

const avatar =
    'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg';

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'ulbi tv',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
                avatar,
            },
        },
    }),
    ThemeDecorator(Theme.LIGHT),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastname: 'ulbi tv',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
                avatar,
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];
