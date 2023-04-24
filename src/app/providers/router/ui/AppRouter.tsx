import {
    memo,
    Suspense,
    useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps } from '@/shared/config/routes';
import { PageLoader } from '@/widgets/PageLoader';
import { routeConfig } from '../routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? (
                        <RequireAuth roles={route.roles}>
                            {element}
                        </RequireAuth>
                    )
                    : (element)}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
}

export default memo(AppRouter);
