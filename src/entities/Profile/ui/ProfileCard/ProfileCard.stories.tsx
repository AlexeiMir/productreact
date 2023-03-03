import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/types/theme/theme';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

Primary.decorators = [StoreDecorator({
    profile: {
        data: {
            first: 'wsdwd',
            lastname: 'wcwc',
        },
    },
})];
