import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                placeholder={t('Введите имя')}
                className={cls.input}
                autoFocus
            />
            <Input
                type="text"
                placeholder={t('Введите пароль')}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export { LoginForm };
