import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { ThemeProvider } from './app/providers/theme';
import '@/app/styles/index.scss';
import App from './app/App';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер не найден. Не удалось вмонтировать реакт приложение');
}

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
