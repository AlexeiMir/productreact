import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ArticlesPage from './ArticlesPage';

import { articleMock } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [
    StoreDecorator({
        articlesPage: {
            ids: ['1', '2'],
            entities: {
                1: articleMock,
                2: articleMock,
            },
            isLoading: false,
            page: 1,
        },
    }),
];
