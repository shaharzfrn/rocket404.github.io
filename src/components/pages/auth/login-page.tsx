import React from 'react';

import {AuthPage, LOGIN_URL, System, USER_SESSION_COOKIE} from '../../../const'
import { setCookie } from "../../../cookies-utils";

import './auth.css'

export interface LoginPageProps {
    setSystem: React.Dispatch<React.SetStateAction<System>>;
    setPage: React.Dispatch<React.SetStateAction<AuthPage>>;
}

export const LoginPage: React.FC<LoginPageProps> = ({
    setSystem,
    setPage
}) => {

    const login: React.FormEventHandler<HTMLFormElement> = (event) => {
        const form_data = new FormData(event.currentTarget);
        event.preventDefault();

        const user_info = JSON.stringify({
            username: form_data.get("username"),
            password:form_data.get("password"),
        });

        console.log("Login: ", user_info);

        fetch(LOGIN_URL, { method: 'POST', body: user_info })
        .then((response) => { return response.json()} )
        .then((data) => {
            if (!data || !data.token) {
                console.log(data);
                return;
            }

            setCookie(USER_SESSION_COOKIE, data.token);
            let name = form_data.get("username");
            if(name == 'admin') {
                setSystem(System.BACKOFFICE_SYSTEM);
            }
            else {
                setSystem(System.E_COMMERCE_SYSTEM);
            }
        }).catch((err) => { console.log("Login Error: Need to display!!!!!", err)} );
    };

    const signup = () => {
        setPage(AuthPage.SIGUP_PAGE);
    }

    const reset = () => {
        setPage(AuthPage.RESET_PAGE);
    }

    return (
        <div>
            <h1 className='page_header'>Login Page</h1>
            <br />
            <form onSubmit={login}>
                <label htmlFor="username" className="fields">Username: </label>
                <input type="text" name="username" placeholder="Username" />
                <br />
                <label htmlFor="password" className="fields">Password: </label>
                <input type="password" name="password" placeholder="Password"/>
                <br /><br />
                <button type="submit" className="submit">Login</button>
            </form>
            <br />
            <div className='signup_text'>Don't have an account? click
                <a className='signup_click' onClick={signup}> here </a>
                to signup!
            </div>
            <br />
            <div className='signup_text'>Forgot your password? click
                <a className='signup_click' onClick={reset}> here </a>
                to reset!
            </div>
        </div>
        );
};


