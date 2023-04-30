import {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string,
  fallback?: ReactElement,
  errorFallback?: ReactElement
}

const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        fallback,
        errorFallback,
        src,
        alt = 'image',
        ...otherProps
    } = props;
    const [isLoading, setIsloading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsloading(false);
        };
        img.onerror = () => {
            setIsloading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            {...otherProps}
        />
    );
});

export { AppImage };
