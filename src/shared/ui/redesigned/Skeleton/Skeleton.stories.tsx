import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    border: '50%',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    width: '100%',
    height: 200,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    width: 100,
    height: 100,
    border: '50%',
};

CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
