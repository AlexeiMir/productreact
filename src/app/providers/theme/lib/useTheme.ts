import { useContext, useEffect } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from '@/app/providers/theme/lib/ThemeContext';
import { Theme } from '@/shared/types/theme/theme';

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme) {
            document.body.className = theme;
        }
    }, [theme]);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            newTheme = Theme.DARK;
            break;

        default:
            newTheme = Theme.LIGHT;
            break;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
