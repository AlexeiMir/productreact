import { CSSProperties, memo } from 'react';

import cls from './Skeleton.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string | number;
}

const Skeleton = memo((props: SkeletonProps) => {
    const { className, width, height, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
});

export { Skeleton };
