import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '@services/index';

type PrivateRouteProps<T> = T & { component: Component }

export const PrivateRoute =  ({ component: Component, ...rest }: PrivateRouteProps<any>)  => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        console.log(currentUser);
        
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)