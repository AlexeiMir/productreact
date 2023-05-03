import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { detectDevice } from '@/shared/lib/detectDevice/detectDevice';
import { Button, Input, StarRating } from '@/shared/ui';
import { ButtonTheme, ButtonSize } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface RatingCardProps {
  className?: string,
  title?: string,
  feedbackTitle?: string,
  rate?: number,
  onCancel?: (starsCount: number) => void,
  onAccept?: (starsCount: number, feedback?: string) => void,

}

const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        rate = 0,
        onCancel,
        onAccept,
    } = props;
    const { t } = useTranslation();
    const isMobile = detectDevice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);

    const [feedback, setfFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (feedbackTitle) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [feedbackTitle, onAccept]);

    const cancelHandle = useCallback(() => {
        onCancel?.(starsCount);
        setIsModalOpen(false);
    }, [onCancel, starsCount]);

    const acceptHandle = useCallback(() => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    }, [
        onAccept,
        starsCount,
        feedback,
    ]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setfFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames('', {}, [className])}
        >
            <VStack max align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating
                    selectedStars={starsCount}
                    onSelect={onSelectStars}
                    size={40}
                />
            </VStack>
            {
                isMobile
                    ? (
                        <Drawer
                            isOpen={isModalOpen}
                            lazy
                            onClose={cancelHandle}
                        >
                            <VStack gap="32">
                                {modalContent}
                                <Button
                                    fullWidth
                                    size={ButtonSize.L}
                                    onClick={acceptHandle}
                                >
                                    {t('Отправить')}
                                </Button>
                            </VStack>
                        </Drawer>

                    )
                    : (
                        <Modal isOpen={isModalOpen} lazy>
                            <VStack gap="32" max>
                                {modalContent}
                                <HStack
                                    justify="end"
                                    max
                                    gap="16"
                                >
                                    <Button
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandle}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandle}
                                    >
                                        {t('Отправить')}
                                    </Button>

                                </HStack>
                            </VStack>
                        </Modal>
                    )
            }

        </Card>
    );
});

export { RatingCard };
