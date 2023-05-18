import { useTranslation } from 'react-i18next';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/deprecated/Button';

export const Counter = () => {
    const { t } = useTranslation();
    const counterValue = useCounterValue();
    const { add, decrement, increment } = useCounterActions();
    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={handleInc}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>
                {t('decrement')}
            </Button>
            <Button data-testid="add-btn" onClick={handleAdd}>
                {t('add')}
            </Button>
        </div>
    );
};
