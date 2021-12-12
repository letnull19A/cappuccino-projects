import React, { useContext } from 'react';
import { ContextDataAuth } from './../context-data/context-data.auth';

function ProfilePage() {

    const auth = useContext(ContextDataAuth);

    const logout = event => {
        console.log("[CLIENT]" + auth.isAuthenticated);
        auth.logout();
    }

    return (
        <>
            <h1>Profile Page {auth.isAuthenticated}</h1>
            <button
                onClick={logout}
            >Logout</button>
        </>
    )
}

export default ProfilePage;