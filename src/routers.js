import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/page.auth';
import RegistrationPage from './pages/page.registration';
import NotFoundPage from './pages/page.notfoud';
import ProfilePage from './pages/page.profile';

function Routing(isAuthenticated) {

    if (isAuthenticated === true) {
        return (
            <Router>
                <Switch>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/reg">
                        <RegistrationPage />
                    </Route>
                    <Route path="/auth">
                        <Redirect to="/profile"></Redirect>
                    </Route>
                    <Route path="/">
                        <Redirect to="/profile"></Redirect>
                    </Route>
                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        );
    } else {
        return (
            <Router>
                <Switch>
                    <Route path="/profile">
                        <Redirect to="/auth"></Redirect>
                    </Route>
                    <Route path="/auth">
                        <AuthPage />
                    </Route>
                    <Route path="/">
                        <AuthPage />
                    </Route>
                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routing;