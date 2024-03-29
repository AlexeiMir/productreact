import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, ButtonSize, ButtonTheme } from './Button';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    size: ButtonSize.L,
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    size: ButtonSize.XL,
    theme: ButtonTheme.OUTLINE,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
