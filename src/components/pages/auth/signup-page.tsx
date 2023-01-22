import React from 'react';

import {AuthPage, SIGNUP_URL, System} from '../../../const'
import './auth.css'

export interface SignupPageProps {
    setSystem: React.Dispatch<React.SetStateAction<System>>;
    setPage: React.Dispatch<React.SetStateAction<AuthPage>>;
}

export const SignupPage: React.FC<SignupPageProps> = ({
    setSystem,
    setPage,
}) => {
    const login = () => {
        setPage(AuthPage.LOGIN_PAGE);
    };

    const signup: React.FormEventHandler<HTMLFormElement> = (event) => {
        const form_data = new FormData(event.currentTarget);
        event.preventDefault();

        if (form_data.get("password") !=  form_data.get("password_conf")) {
            console.log("Login Error: Need to display!!!!!")
        }
        const user_info = JSON.stringify({
            username: form_data.get("username"),
            password: form_data.get("password"),
            question: form_data.get("question"),
            answer: form_data.get("answer"),
        });


        fetch(SIGNUP_URL, { method: 'POST', body: user_info,})
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
                <h1 className='page_header'>Signup Page</h1>
                <br />
                <form onSubmit={signup}>
                    <label htmlFor="username" className="fields">Username: </label>
                    <input type="text" name="username" placeholder="Username" />
                    <br/>
                    <label htmlFor="password" className="fields">Password: </label>
                    <input type="password" name="password" placeholder="Password"/>
                    <br/>
                    <label htmlFor="password" className="fields">Confirm Password: </label>
                    <input type="password" name="password_conf" placeholder="Confirm Password"/>
                    <br />
                    <label htmlFor="question" className="fields">Secret Question: </label>
                    <input type="text" name="question" placeholder="Secret Question" />
                    <br />
                    <label htmlFor="answer" className="fields">Answer: </label>
                    <input type="text" name="answer" placeholder="Answer" />
                    <br/><br />
                    <button type="submit" className='submit'>Signup</button>
                </form>
                <br />
                <div className='signup_text'>Already have an account? click
                    <a className='signup_click' onClick={login}> here </a>
                    to login!
                </div>
            </div>
    );
};


