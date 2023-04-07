import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { memo } from 'react';

import { Button, Input } from 'shared/ui';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from 'features/ArticleDetailsComment';
import { HStack } from 'shared/ui/Stack';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string,
  text?: string,
  error?: string,
  onChange: (val: string) => void;
  onClick: () => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

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
        <DynamicModuleLoader reducers={reducers}>
            <HStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={text}
                    className={cls.input}
                    onChange={onChange}
                    placeholder={t('Введите текст комментария')}
                />
                <Button onClick={onClick}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
