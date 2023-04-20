import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Modal } from '@/shared/ui/Modal/Modal';
import { Loader } from '@/shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string,
  isOpen: boolean,
  onClose: () => void
}

const LoginModal = ({
    className,
    isOpen,
    onClose,
}: LoginModalProps) => {
    const { t } = useTranslation();
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

export { LoginModal };
