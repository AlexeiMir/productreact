import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleEditeButton } from './ArticleEditeButton';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleEditeButton',
    component: ArticleEditeButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditeButton>;

const Template: ComponentStory<typeof ArticleEditeButton> = (arg) => (
    <ArticleEditeButton {...arg} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
