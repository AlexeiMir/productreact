import { Story } from '@storybook/react';

// eslint-disable-next-line feature-sliced-design-checker/layer-imports
import { ThemeProvider } from '@/app/providers/theme';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
