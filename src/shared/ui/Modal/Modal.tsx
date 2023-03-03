import { useTheme } from 'app/providers/theme';
import {
    MouseEvent,
    MutableRefObject,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

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
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
        return () => {
            setIsMounted(false);
        };
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onContentClick = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    useEffect(() => () => {
        clearTimeout(timeRef.current);
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, closeHandler]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div
                    onClick={closeHandler}
                    className={cls.overlay}
                >
                    <div
                        onClick={onContentClick}
                        className={classNames(cls.content, {}, [])}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export { Modal };
