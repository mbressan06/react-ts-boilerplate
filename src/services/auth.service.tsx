import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '@utils/helpers';
import { ApiUrls } from '@constants/index';
import { User } from '../schema/User';

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

    return fetch(ApiUrls.login(), requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function isLoggedIn(): boolean {
    if(!userJson){
        return false
    }
   
    return true;
}
