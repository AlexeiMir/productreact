import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
 className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation');
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}

        </Button>
    );
};
