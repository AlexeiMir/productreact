import { CSSProperties, ReactNode, useMemo } from 'react';

import UserIcon from '../../../asserts/icons/user-filled.svg';
import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import { HStack } from '../Stack';
import { FlexGap } from '../Stack/Flex/Flex';

import cls from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    username?: ReactNode;
    gap?: FlexGap;
}

const Avatar = (props: AvatarProps) => {
    const { className, alt, size = 100, src, username, gap } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            height: size,
            width: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;
    const appImage = (
        <AppImage
            style={styles}
            src={src}
            alt={alt}
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );

    if (username) {
        return (
            <HStack gap={gap}>
                {appImage}
                {username}
            </HStack>
        );
    }

    return appImage;
};

export { Avatar };
