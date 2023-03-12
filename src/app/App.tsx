import { userActions } from 'entities/User';
import { getUserInited } from 'entities/User/model/selectors/getUserInited/getUserInited';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/router';

export default function App() {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        const userFromStorage = localStorage.getItem(USER_LOCALSTORAGE_KEY);

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
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
