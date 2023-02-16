import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/theme';
import { Theme } from 'shared/types/theme/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
