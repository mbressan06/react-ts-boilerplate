import { authHeader, handleResponse } from '@utils/index';
import { ApiUrls, buildApiUrl } from '@constants/index';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(buildApiUrl(ApiUrls.users()), requestOptions).then(handleResponse);
}