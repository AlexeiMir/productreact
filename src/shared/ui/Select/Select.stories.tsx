import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите ваше значение',
    options: [
        {
            content: 'Первый пункт',
            value: '123',
        },
        {
            content: 'Второй пункт',
            value: '1234',
        },
    ],
};
