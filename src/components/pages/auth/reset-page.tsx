import React from 'react';

import {AuthPage, RESET_URL, SIGNUP_URL, System} from '../../../const'
import './auth.css'

export interface ResetPageProps {
    setSystem: React.Dispatch<React.SetStateAction<System>>;
    setPage: React.Dispatch<React.SetStateAction<AuthPage>>;
}

export const ResetPage: React.FC<ResetPageProps> = ({
    setSystem,
    setPage,
}) => {
    const update = () => {
        setPage(AuthPage.UPDATE_PAGE);
    };

    const reset: React.FormEventHandler<HTMLFormElement> = (event) => {
        const form_data = new FormData(event.currentTarget);
        event.preventDefault();

        const user_info = JSON.stringify({
            username: form_data.get("username"),
            answer: form_data.get("answer"),
        });

        fetch(RESET_URL, { method: 'POST', body: user_info,})
        .then((response) => response.json())
        .then((data) => {
            if (!data || data.message) {
                console.log(data);
                return;
            }
            update();
        }).catch((err) => {console.log("Login Error: Need to display!!!!!", err)});
    };

    return (
            <div>
                <h1 className='page_header'>Reset Page</h1>
                <br />
                <form onSubmit={reset}>
                    <label htmlFor="username" className="fields">Username: </label>
                    <input type="text" name="username" placeholder="Username" />
                    <br />
                    <label htmlFor="answer" className="fields">Answer: </label>
                    <input type="text" name="answer" placeholder="Answer" />
                    <br/><br />
                    <button type="submit" className='submit'>Submit</button>
                </form>
            </div>
    );
};


