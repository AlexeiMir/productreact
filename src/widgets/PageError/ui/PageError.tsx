import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('translation');

    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className, 'centered'])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};

export { PageError };
