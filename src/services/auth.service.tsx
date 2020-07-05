import { BehaviorSubject } from 'rxjs';
import { ApiUrls, buildApiUrl } from '@constants/index';
import { handleResponse } from '@utils/helpers';
import { User } from '@schema/index';

const userJson = localStorage.getItem('currentUser');

const currentUser = userJson !== null ? JSON.parse(userJson) : new User({
    id: 0,
    name: '',
    email: '',
    hash: '',
    active: false,

});

const currentUserSubject = new BehaviorSubject(currentUser);

export const authenticationService = {
    login,
    logout,
    isLoggedIn,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(user: string, pwd: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pwd })
    };
    console.log(ApiUrls.login());
    

    return fetch(buildApiUrl(ApiUrls.login()), requestOptions)
        .then(handleResponse)
        .then(currentUser => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            currentUserSubject.next(currentUser);

            return currentUser;
        });
}

function logout() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    return fetch(buildApiUrl(ApiUrls.logout()), requestOptions)
}

function isLoggedIn(): boolean {
    if(!userJson){
        return false
    }
   
    return true;
}
