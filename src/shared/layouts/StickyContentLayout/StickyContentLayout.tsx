import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './StickyContentLayout.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactNode;
    content: ReactNode;
    right?: ReactNode;
}

const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, left, content, right } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
});

export { StickyContentLayout };
