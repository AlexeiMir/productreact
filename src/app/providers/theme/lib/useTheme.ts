import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from 'app/providers/theme/lib/ThemeContext';
import { Theme } from 'shared/types/theme/theme';

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
}
