import {
    MutableRefObject,
    useRef,
    useEffect,
} from 'react';

interface UseInfiniteScrollProps{
  callBack?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callBack,
}: UseInfiniteScrollProps) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        if (callBack) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callBack();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                observer.current.unobserve(triggerElement);
            }
        };
    }, [
        wrapperRef,
        triggerRef,
        callBack,
    ]);
}
