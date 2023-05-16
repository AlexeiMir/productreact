import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HStack } from '../Stack';

import cls from './AppLogo.module.scss';

import AppSvg from '@/shared/asserts/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
}

const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg className={cls.appLogo} />
        </HStack>
    );
});

export { AppLogo };