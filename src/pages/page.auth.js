import React, { useContext, useState } from 'react';
import { useHttp } from './../hooks/hooks.http';
import { ContextDataAuth } from './../context-data/context-data.auth';

function AuthPage() {

    var data;
    const auth = useContext(ContextDataAuth);
    const { request, error } = useHttp();
    const [form, setForm] = useState({
        user_login: '',
        user_password: ''
    }) 

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
        event.preventDefault();
    }

    const loginHandler = async () => {
        try {
            data = await request('/api/auth', 'POST', { ...form });
            auth.login(data.token, data.userId);
        } catch (e) { }
    }

    return (
        <>
            <h1>Auth page</h1>
            <div className="m_form">
                <label>Логин</label><br />
                <input
                    type="text"
                    name="user_login"
                    id="user_login"
                    onChange={changeHandler} /><br />
                <label>Пароль</label><br />
                <input
                    type="password"
                    name="user_password"
                    id="user_password"
                    onChange={changeHandler} /><br />
                <button
                    onClick={loginHandler}
                >Войти</button>
                <p>{ error }</p>
            </div>
        </>
    )

}

export default AuthPage;