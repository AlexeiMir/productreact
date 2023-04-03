import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

export default {
    title: 'entities/Article/ArticleListItemSkeleton',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => <ArticleListItemSkeleton {...args} />;

export const GRID = Template.bind({});
GRID.args = {
    view: ArticleView.GRID,
};

export const LIST = Template.bind({});
LIST.args = {
    view: ArticleView.LIST,
};