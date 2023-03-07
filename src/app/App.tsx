import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/router';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const userFromStorage = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        console.log('userFromStorage', userFromStorage);

        if (userFromStorage) {
            const user = JSON.parse(userFromStorage);
            dispatch(userActions.initAuthData(user));
        }
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
