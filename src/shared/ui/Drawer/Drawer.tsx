import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { memo, ReactNode } from 'react';

import { useTheme } from 'app/providers/theme';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string,
  children: ReactNode,
  isOpen?: boolean,
  onClose?: () => void,
  lazy?: boolean
}

const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const { theme } = useTheme();
    const {
        isClosing,
        isMounted,
        close,
    } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
            <Overlay onClick={close} />
            <div className={cls.content}>
                {children}
            </div>
        </div>
    );
});

export { Drawer };
