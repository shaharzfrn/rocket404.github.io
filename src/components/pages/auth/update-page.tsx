import React from 'react';

import {AuthPage, SIGNUP_URL, System, UPDATE_URL, USER_SESSION_COOKIE} from '../../../const'
import { deleteCookie } from '../../../cookies-utils';
import './auth.css'

export interface UpdatePageProps {
    setSystem: React.Dispatch<React.SetStateAction<System>>;
    setPage: React.Dispatch<React.SetStateAction<AuthPage>>;
}

export const UpdatePage: React.FC<UpdatePageProps> = ({
    setSystem,
    setPage,
}) => {
    const login = () => {
        setPage(AuthPage.LOGIN_PAGE);
    };

    const update: React.FormEventHandler<HTMLFormElement> = (event) => {
        const form_data = new FormData(event.currentTarget);
        event.preventDefault();

        const user_info = JSON.stringify({
            username: form_data.get("username"),
            password: form_data.get("password"),
        });


        fetch(UPDATE_URL, { method: 'POST', body: user_info,})
        .then((response) => response.json())
        .then((data) => {
            if (!data || data.message) {
                console.log(data);
                return;
            }
            login();
        }).catch((err) => {console.log("Login Error: Need to display!!!!!", err)});
    };

    return (
            <div>
                <h1 className='page_header'>Reset Page</h1>
                <br />
                <form onSubmit={update}>
                    <label htmlFor="username" className="fields">Username: </label>
                    <input type="text" name="username" placeholder="Username" />
                    <br/>
                    <label htmlFor="password" className="fields">New Password: </label>
                    <input type="password" name="password" placeholder="Password"/>
                    <br/>
                    <label htmlFor="password" className="fields">Confirm Password: </label>
                    <input type="password" name="password_conf" placeholder="Confirm Password"/>
                    <br/><br />
                    <button type="submit" className='submit'>Reset</button>
                </form>
            </div>
    );
};


