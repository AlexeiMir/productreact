import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './MainLayout.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface MainLayoutProps {
    className?: string;
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
    toolbar?: ReactNode;
}

const MainLayout = memo((props: MainLayoutProps) => {
    const { className, header, content, sidebar, toolbar } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.content}>{content}</div>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});

export { MainLayout };
