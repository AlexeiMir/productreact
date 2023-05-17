import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { detectDevice } from '@/shared/lib/detectDevice/detectDevice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const isMobile = detectDevice();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    );

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} lazy onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [])}
        >
            {text}
        </Modal>
    );
});
