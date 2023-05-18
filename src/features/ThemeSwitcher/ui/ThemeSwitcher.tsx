import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import ThemeIconDeprecated from '@/shared/asserts/icons/theme-light.svg';
import ThemeIcon from '@/shared/asserts/icons/theme.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <Button
                    onClick={onToggleHandler}
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                        inverted
                    />
                </Button>
            }
            on={
                <Icon
                    Svg={ThemeIcon}
                    width={40}
                    height={40}
                    clickable
                    onClick={onToggleHandler}
                />
            }
        />
    );
});
