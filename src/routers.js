import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/page.auth';
import RegistrationPage from './pages/page.registration';
import NotFoundPage from './pages/page.notfoud';
import ProfilePage from './pages/page.profile';

export const Routing = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                <Route path="/reg">
                    <RegistrationPage />
                </Route>
                <Route path="/notfound">
                    <NotFoundPage />
                </Route>
                <Redirect to="/profile"/>
            </Switch>
        );
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/"></Redirect>
        </Switch>
    )
}