import { authHeader, handleResponse } from '@utils/index';
import { ApiUrls } from '@constants/index';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(ApiUrls.users(), requestOptions).then(handleResponse);
}