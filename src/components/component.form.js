import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { useHttp } from './../hooks/hooks.http';
import { ContextDataAuth } from './../context-data/context-data.auth';
import "./../scss/components/_form.scss";

function Form() {

    var data;
    const navigate = useNavigate();
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
            navigate('/Profile/Me');
        } catch (e) { }
    }

    return (
        <div className='content center-all'>
            <div className="mainForm">
                <h3 className='h3'>Добро пожаловать в SystemDiary!</h3>
                <h1 className='h1'>Авторизация</h1>
                <div className="form">
                    <div className='inputFieldBlock'>
                        <input
                            className="inputField"
                            type="text"
                            name="user_login"
                            id="user_login"
                            placeholder='Имя пользователя'
                            onChange={changeHandler} />
                    </div>
                    <div className='inputFieldBlock'>
                        <input
                            className="inputField"
                            type="password"
                            name="user_password"
                            id="user_password"
                            placeholder='Пароль'
                            onChange={changeHandler} />
                    </div>
                    <div className='defaultBlock align-right'>
                        <a className='recover' href="/recovery">Забыли пароль?</a>
                    </div>
                    <button
                        onClick={loginHandler}
                    >Вход</button>
                    <p className='error'>{error}</p>
                </div>
            </div>

        </div>
    );
}

export default Form;