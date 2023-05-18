import { memo } from 'react';

import { HStack } from '../../deprecated/Stack';

import cls from './AppLogo.module.scss';

import AppSvg from '@/shared/asserts/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number;
}

const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg
                width={size}
                height={size}
                color="black"
                className={cls.appLogo}
            />
        </HStack>
    );
});

export { AppLogo };
