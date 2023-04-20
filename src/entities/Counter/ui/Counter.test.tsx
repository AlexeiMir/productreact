import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter render', () => {
        const initialState = {
            counter: { value: 10 },
        };
        componentRender(<Counter />, { initialState });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('Counter increment', async () => {
        const initialState = {
            counter: { value: 10 },
        };
        componentRender(<Counter />, { initialState });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('Counter decrement', async () => {
        const initialState = {
            counter: { value: 10 },
        };
        componentRender(<Counter />, { initialState });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
