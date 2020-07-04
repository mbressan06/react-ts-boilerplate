import { createBrowserHistory } from 'history';
import { authenticationService } from '@services/index';
import { User } from '@schema/index';

export const sum = (a: number, b: number): number => a + b;

export function handleResponse(response: any) {
    var location: Location
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const history = createBrowserHistory();

export function logout() {
  authenticationService.logout();
  history.push('/login');
}

export function authHeader(): {Authorization: string} {
    // return authorization header with jwt token
    const currentUser: User = authenticationService.currentUserValue;
    if (currentUser && currentUser.hash) {
        return { Authorization: `Bearer ${currentUser.hash}` };
    } else {
        return { Authorization: ''};
    }
}