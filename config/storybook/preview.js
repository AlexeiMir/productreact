import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/shared/types/theme/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

// export const globalTypes = {
//     theme: {
//         name: 'Theme',
//         description: 'Global theme for components',
//         toolbar: {
//             // https://5a375b97f4b14f0020b0cda3-wbeulgbetj.chromatic.com/?path=/story/basics-icon--labels
//             icon: 'circlehollow',
//             items: [
//                 { value: 'light', title: 'Light' },
//                 { value: 'dark', title: 'Dark' },
//             ],
//             showName: true,
//             dynamicTitle: true,
//         },
//     },
// };

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
