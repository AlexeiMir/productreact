import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation('translation');
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Not found')}
        </Page>
    );
};

export { NotFoundPage };
