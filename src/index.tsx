import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { ThemeProvider } from './app/providers/theme';
import { ForceUpdateProvider } from './shared/lib/render/forceUpdate';

import { StoreProvider } from '@/app/providers/StoreProvider';

import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер не найден. Не удалось вмонтировать реакт приложение',
    );
}

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);

export { Theme } from '@/shared/const/theme';
