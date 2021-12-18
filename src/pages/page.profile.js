import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import { ContextDataAuth } from './../context-data/context-data.auth';
import Menu from './../components/component.menu';
import "./../scss/other/_backgroundSimple.scss";
import Profile from './../components/component.profile';
import Container from './../components/component.container';
import { useHttp } from './../hooks/hooks.http';

function ProfilePage() {

    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const { userId, token, auth } = useContext(ContextDataAuth);
    const { request } = useHttp();
    var id = useParams().id;

    const getUserData = useCallback(async () => {

        try {

            if (id === 'Me') { id = userId; }

            setData(await request(`/api/profile/${id}`, 'GET', null, { Authorization: `Bearer ${token}` }));

        } catch (e) { }

    }, [token, id, request]);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        navigate('/Auth');
    }

    useEffect(() => {
        getUserData();
    }, [getUserData]);

    document.body.classList.remove("colorfull");
    document.body.classList.add("colorless");

    return (
        <div className='flex row'>
            <Menu />
            <Scrollbars style={{ height: '100vh', renderThumbHorizontal: null }}>
                <Container element={data && <Profile data={data} />} />
            </Scrollbars>
        </div>

    )
}

export default ProfilePage;