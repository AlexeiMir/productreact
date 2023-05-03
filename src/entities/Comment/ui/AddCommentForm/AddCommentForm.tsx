import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './AddCommentForm.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, Input } from '@/shared/ui';
import { HStack } from '@/shared/ui/Stack';

export interface AddCommentFormProps {
  className?: string,
  text?: string,
  error?: string,
  onChange: (val: string) => void;
  onClick: () => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        text,
        error,
        onChange,
        onClick,
    } = props;
    const { t } = useTranslation();
    return (

        <HStack
            data-testid="AddCommentForm"
            justify="between"
            max
            className={classNames(cls.AddCommentForm, {}, [className])}
        >
            <Input
                data-testid="AddCommentForm.Input"
                value={text}
                className={cls.input}
                onChange={onChange}
                placeholder={t('Введите текст комментария')}
            />
            <Button
                data-testid="AddCommentForm.Button"
                onClick={onClick}
            >
                {t('Отправить')}

            </Button>
        </HStack>

    );
});

export default AddCommentForm;
