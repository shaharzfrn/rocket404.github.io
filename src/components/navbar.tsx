
import React from 'react';

import { System } from '../const'

//import { setCookie, getCookie, deleteCookie } from "../../../cookies-utils";

export interface NavBarProps {
    system: System;

    setSystem: React.Dispatch<React.SetStateAction<System>>;
}

export const NavBar: React.FC<NavBarProps> = ({
    system,
    setSystem,
}) => {
    
    return (<div></div>);
};


