import {
  FC,
  useMemo,
  useState
} from 'react'
import { Theme } from 'shared/types/theme/theme';
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext
} from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaulProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaulProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;