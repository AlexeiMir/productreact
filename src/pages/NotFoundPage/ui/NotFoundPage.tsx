import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

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
