import { CSSProperties, useMemo } from 'react';

import cls from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
className?: string,
src?: string,
alt?: string,
size?: number,
}

const Avatar = (props: AvatarProps) => {
    const {
        className,
        alt,
        size,
        src,
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100,
    }), [size]);

    return (
        <img
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};

export { Avatar };
