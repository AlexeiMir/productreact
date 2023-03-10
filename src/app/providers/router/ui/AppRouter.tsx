import {
    memo,
    Suspense,
    useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps } from 'shared/config/routes';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { routeConfig } from '../routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

function AppRouter() {
    const renderWithValue = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? (
                        <RequireAuth>
                            {element}
                        </RequireAuth>
                    )
                    : (element)}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithValue)}
        </Routes>
    );
}

export default memo(AppRouter);
