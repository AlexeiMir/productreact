import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    })],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (arg) => <ArticleRating {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const withoutRate = Template.bind({});
withoutRate.args = {
    articleId: '1',
};

withoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
            ],
        },
    ],
};
