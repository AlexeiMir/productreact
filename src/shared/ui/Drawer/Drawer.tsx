import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { memo, ReactNode } from 'react';

import { useTheme } from 'app/providers/theme';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string,
  children: ReactNode,
  isOpen?: boolean,
  onClose?: () => void
}

const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const { theme } = useTheme();
    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    return (
        <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
            <Overlay onClick={onClose} />
            <div className={cls.content}>
                {children}
            </div>
        </div>
    );
});

export { Drawer };
