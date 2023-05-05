import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationDelay: number;
}

export function useModal({ isOpen, onClose, animationDelay }: UseModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                setIsClosing(false);
            }, animationDelay);
        }
        return () => {
            setIsMounted(false);
        };
    }, [isOpen, animationDelay]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    useEffect(
        () => () => {
            clearTimeout(timeRef.current);
        },
        [],
    );

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, close]);

    return {
        isClosing,
        isMounted,
        close,
    };
}
