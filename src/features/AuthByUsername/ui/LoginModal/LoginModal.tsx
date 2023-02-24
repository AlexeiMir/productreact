import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};

export { LoginModal };
