import {
    ReactNode,
} from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface ModalProps {
  children: ReactNode,
  className?: string,
  isOpen?: boolean,
  lazy?: boolean,
  onClose?: () => void
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        lazy,
        onClose,
    } = props;
    const { theme } = useTheme();

    const {
        isClosing,
        isMounted,
        close,
    } = useModal({
        isOpen,
        onClose,
        animationDelay: ANIMATION_DELAY,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export { Modal };
