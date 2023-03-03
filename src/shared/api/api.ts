import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/localstorage';

const baseURL = __API__;

export const $api = axios.create({
    baseURL,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
