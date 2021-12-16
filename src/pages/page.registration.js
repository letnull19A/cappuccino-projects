import React, {useContext, useState} from 'react';
import { useHttp } from './../hooks/hooks.http';
import { ContextDataAuth } from './../context-data/context-data.auth';

function RegistrationPage() {

    const auth = useContext(ContextDataAuth);
    const { request } = useHttp();
    const [form, setForm] = useState({
        user_name: '',
        user_surname: '',
        user_fatherName: '',
        user_status: 0,
        user_email: '',
        user_login: '',
        user_password: '',
        user_re_password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const loginHandler = async () => {
        try {
        const data = await request('/api/e/reg', 'POST', {...form});
        auth.login(data.token, data.userId);
        } catch (e) {}
    }

    return (
        <>
            <h1>Регистрация</h1>
            <div className="m-form">
                <label>Имя</label><br/>
                <input 
                    type="text"
                    name="user_name"
                    id="user_name"
                    onChange={changeHandler}/><br/>
                <label>Фамилия</label><br/>
                <input 
                    type="text"
                    name="user_surname"
                    id="user_surname"
                    onChange={changeHandler}/><br/>
                <label>Отчество</label><br/>
                <input 
                    type="text"
                    name="user_fatherName"
                    id="user_fatherName"
                    onChange={changeHandler}/><br/>
                <label>Статус</label><br/>
                <select id="user_status" name="user_status">
                    <option value="2">Администратор</option>
                    <option value="1">Учитель/Преподаватель</option>
                    <option value="0">Ученик/Студент</option>
                </select><br/>
                <label>E-Mail</label><br/>
                <input 
                    type="email"
                    name="user_email"
                    id="user_email"
                    onChange={changeHandler}/><br/>
                <label>Логин</label><br/>
                <input 
                    type="text"
                    name="user_login"
                    id="user_login"
                    onChange={changeHandler}/><br/>
                <label>Пароль</label><br/>
                <input 
                    type="password"
                    name="user_password"
                    id="user_password"
                    onChange={changeHandler}/><br/>
                <label>Повторный пароль</label><br/>
                <input 
                    type="password"
                    name="user_re_password"
                    id="user_re_password"
                    onChange={changeHandler}/><br/>
                <button
                    onClick={loginHandler}
                >Войти</button>
            </div>
        </>
    )

}

export default RegistrationPage;