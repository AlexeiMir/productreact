import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { articleMock } from '../../mocks/data';
import { ArticleView } from '../../model/consts/articleConsts';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const GRID = Template.bind({});
GRID.args = {
    article: articleMock,
    view: ArticleView.GRID,
};

export const LIST = Template.bind({});
LIST.args = {
    article: articleMock,
    view: ArticleView.LIST,
};
