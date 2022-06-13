import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../../redux/UserSlice';

import './Login.css';

function initialState() {
    return { user: '', password: '', token: '' };
}

function doLogin({ user, password }) {
    if (user === 'hotelcolorsmanaus' && password === 'amazonas2021') {
        return { token: '2f826c69af1741770cc13d2921f1009d' };
    }
    return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    function onSubmit(event) {
        event.preventDefault();

        const { token, error } = doLogin(values);

        if (token) {
            // escrever token
            setValues({ ...values, token })
            values.token = token;
            // setToken(token);
            dispatch(login(token));
            return navigate('/editar-valores');

        }
        setError(error);
        setValues(initialState);
        dispatch(logout());
    }

    return (
        <div className="user-login">
            <h1 className="user-login__title">Login Colors Hotel</h1>
            <form onSubmit={onSubmit}>
                <div className="user-login__form-control">
                    <label htmlFor="user">Usuário</label>
                    <input
                        id="user"
                        type="text"
                        name="user"
                        onChange={onChange}
                        value={values.user}
                    />
                </div>
                <div className="user-login__form-control">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={values.password}
                    />
                </div>
                {error && (
                    <div className="user-login__error">{error}</div>
                )}
                <button
                    type="submit"
                >
                    Entrar
                </button>
            </form>
            <h1>{values.token}</h1>
        </div>
    );
};

export default UserLogin;
