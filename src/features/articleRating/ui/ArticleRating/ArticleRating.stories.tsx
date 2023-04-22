import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/types/theme/theme';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (arg) => <ArticleRating {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};

export const Dark = Template.bind({});
Dark.args = {
    articleId: '1',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
