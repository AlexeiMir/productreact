import { Story, StoryContext } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

export const TranslationDecorator = (StoryComponent: Story, context: StoryContext) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { locale } = context.globals;

    // When the locale global changes
    // Set the new locale in i18n
    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);
    return (
        <Suspense fallback="">
            <I18nextProvider i18n={i18n}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    );
};
