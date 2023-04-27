import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import AddCommentForm from './AddCommentForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: '123',
};

Primary.decorators = [
    StoreDecorator({}),
];
