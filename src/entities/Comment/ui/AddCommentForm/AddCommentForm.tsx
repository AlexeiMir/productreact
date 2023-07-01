import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './AddCommentForm.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface AddCommentFormProps {
    className?: string;
    text?: string;
    error?: string;
    onChange: (val: string) => void;
    onClick: () => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, text, error, onChange, onClick } = props;
    const { t } = useTranslation();
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <HStack
                    data-testid="AddCommentForm"
                    justify="between"
                    max
                    className={classNames(cls.AddCommentForm, {}, [className])}
                >
                    <InputDeprecated
                        data-testid="AddCommentForm.Input"
                        value={text}
                        className={cls.input}
                        onChange={onChange}
                        placeholder={t('Введите текст комментария')}
                    />
                    <ButtonDeprecated
                        data-testid="AddCommentForm.Button"
                        onClick={onClick}
                    >
                        {t('Отправить')}
                    </ButtonDeprecated>
                </HStack>
            }
            on={
                <Card padding="24" border="partial" max>
                    <HStack
                        data-testid="AddCommentForm"
                        justify="between"
                        gap="16"
                        max
                        className={classNames(
                            cls.AddCommentFormRedesigned,
                            {},
                            [className],
                        )}
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
                </Card>
            }
        />
    );
});

export default AddCommentForm;
