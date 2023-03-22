import React, { Suspense } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComment } from './ArticleDetailsComment';

export default {
    title: 'features/ArticleDetailsComment',
    component: ArticleDetailsComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComment>;

const Template: ComponentStory<typeof ArticleDetailsComment> = (args) => <Suspense fallback=""><ArticleDetailsComment {...args} /></Suspense>;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'some comment',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'some comment 2',
            user: { id: '1', username: 'Vasya' },
        },
    ],
};

Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    comments: [
    ],
    commentsIsLoading: true,
};

Loading.decorators = [StoreDecorator({})];
