import { Story } from '@storybook/react';

// eslint-disable-next-line feature-sliced-design-checker/layer-imports
import { StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line feature-sliced-design-checker/layer-imports
import { ThemeProvider } from '@/app/providers/theme';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <StoreProvider
            initialState={{
                user: {
                    authData: {
                        jsonSettings: {
                            theme: Theme.LIGHT,
                        },
                    },
                },
            }}
        >
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        </StoreProvider>
    );
