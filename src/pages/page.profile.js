import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextDataAuth } from './../context-data/context-data.auth';

function ProfilePage() {

    const history = useHistory();
    const auth = useContext(ContextDataAuth);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/auth');
    }

    return (
        <>
            <h1>Profile Page {auth.isAuthenticated}</h1>
            <button
                onClick={logoutHandler}
            >Logout</button>
        </>
    )
}

export default ProfilePage;