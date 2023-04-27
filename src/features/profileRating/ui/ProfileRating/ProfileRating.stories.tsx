import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileRating from './ProfileRating';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (arg) => <ProfileRating {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
    profileId: '1',
};

export const Dark = Template.bind({});
Dark.args = {
    profileId: '1',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
