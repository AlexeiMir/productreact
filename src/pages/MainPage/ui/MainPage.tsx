import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui';
import { Page } from 'widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            <BugButton />
            {t('Главная страница')}
            <Input
                placeholder={t('Введите текст')}
                onChange={onChange}
                value={value}
            />
        </Page>
    );
};

export default MainPage;
