import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { articlesMock } from '../../mocks/data';
import { ArticleView } from '../../model/consts/articleConsts';

import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const GRID = Template.bind({});
GRID.args = {
    articles: articlesMock,
    isLoading: false,
    view: ArticleView.GRID,
};

export const LIST = Template.bind({});
LIST.args = {
    articles: articlesMock,
    isLoading: false,
    view: ArticleView.LIST,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.GRID,
};

export const LoadingList = Template.bind({});
LoadingList.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.LIST,
};
