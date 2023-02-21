import { useTheme } from 'app/providers/theme';
import {
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  children: ReactNode,
  className?: string,
  isOpen: boolean,
  onClose: () => void
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onClose,
    } = props;
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onContentClick = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => () => {
        clearTimeout(timeRef.current);
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal keepMounted={isOpen}>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    onClick={closeHandler}
                    className={cls.overlay}
                >
                    <div
                        onClick={onContentClick}
                        className={classNames(cls.content, {}, [cls[theme]])}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export { Modal };
