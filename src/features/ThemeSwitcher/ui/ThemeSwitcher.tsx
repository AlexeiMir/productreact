import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import DarkIcon from 'shared/asserts/icons/theme-dark.svg';
import LightIcon from 'shared/asserts/icons/theme-light.svg';
import { Theme } from 'shared/types/theme/theme';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme } = useTheme();
 return (
   <Button
     onClick={toggleTheme}
     className={classNames(cls.ThemeSwitcher, {}, [className])}
     theme={ThemeButton.CLEAR}
   >
     {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
 </Button>
 );
};