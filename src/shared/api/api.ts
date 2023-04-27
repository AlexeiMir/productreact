import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from '../const/localstorage';

const baseURL = __API__;

export const $api = axios.create({
    baseURL,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
