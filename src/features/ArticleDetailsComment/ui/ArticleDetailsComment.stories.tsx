import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { Suspense } from 'react';

import { ArticleDetailsComment } from './ArticleDetailsComment';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleDetailsComment',
    component: ArticleDetailsComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComment>;

const Template: ComponentStory<typeof ArticleDetailsComment> = (args) => (
    <Suspense fallback="">
        <ArticleDetailsComment {...args} />
    </Suspense>
);

export const Primary = Template.bind({});
Primary.args = {
    id: '3',
};

Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    id: '3',
};

Loading.decorators = [StoreDecorator({})];
