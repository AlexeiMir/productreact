import { useSelector } from 'react-redux';

import { getUserAuthData } from '../../selectors/getUserAuthData/getUserAuthData';

export const useAuth = () => {
    const auth = useSelector(getUserAuthData);

    return auth;
};
