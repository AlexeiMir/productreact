import { BugButton } from 'app/providers/ErrorBoundary';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui';

const MainPage: FC = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Input
                placeholder={t('Введите текст')}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default MainPage;
