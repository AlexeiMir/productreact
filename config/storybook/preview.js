import { addDecorator } from '@storybook/react';
// import { TranslationDecorator }
//     from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'shared/types/theme/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
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

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
// addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
