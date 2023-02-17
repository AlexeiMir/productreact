import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Not found')}
        </div>
    );
};

export { NotFoundPage };
