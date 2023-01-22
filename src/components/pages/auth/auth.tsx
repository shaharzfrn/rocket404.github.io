import React from 'react';

import {AuthPage, System, USER_SESSION_COOKIE} from '../../../const'

import {getCookie} from "../../../cookies-utils";

import {LoginPage} from "./login-page";
import {SignupPage} from "./signup-page";
import { ResetPage } from './reset-page';

export interface AuthProps {
    setSystem: React.Dispatch<React.SetStateAction<System>>;
}

export const Auth: React.FC<AuthProps> = ({
    setSystem
}) => {
    const [page, setPage] = React.useState<AuthPage>(AuthPage.LOGIN_PAGE);

    const user_already_login = () => {
        if (getCookie(USER_SESSION_COOKIE) != null) {
            // TODO: need to check if the token is valid?????
            setSystem(System.E_COMMERCE_SYSTEM);
        }
    };

    React.useEffect(user_already_login);

    switch (page) { // TODO: need to add forgot password??????
        case AuthPage.LOGIN_PAGE:
            return <LoginPage setSystem={setSystem} setPage={setPage}/>

        case AuthPage.SIGUP_PAGE:
            return <SignupPage setSystem={ setSystem } setPage={setPage}/>;
        
        case AuthPage.RESET_PAGE:
            return <ResetPage setSystem={ setSystem } setPage={setPage}/>;

        default:
            return null;
    }
};


