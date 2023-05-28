import { addDecorator } from '@storybook/react';

// import { TranslationDecorator }
//     from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
        ],
    },
};

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', title: 'English' },
                { value: 'ru', title: 'Russian' },
            ],
            showName: true,
        },
    },
};

// i18n.on('languageChanged', (locale) => {
//     const direction = i18n.dir(locale);
//     document.dir = direction;
// });

// addDecorator(TranslationDecorator);

// addDecorator(StoreDecorator({
//   user: {
//     authData: {
//       jsonSettings: {
//         theme: Theme.LIGHT
//       }
//     }
// }}));
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
