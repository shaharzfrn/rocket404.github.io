import React from 'react';

import { ECommerce } from './eCommerce/eCommerce';
import { Backoffice } from './backoffice/backoffice'
import { Auth } from './auth/auth'

import { System } from '../../const'

export interface PageLayoutProps {
    system: System;
    setSystem: React.Dispatch<React.SetStateAction<System>>;

    // add new props here
}


export const PageLayout: React.FC<PageLayoutProps> = ({
    system,
    setSystem,
}) => {


    switch (system) {
        case System.BACKOFFICE_SYSTEM:
            return <Backoffice setSystem={setSystem} />;

        case System.E_COMMERCE_SYSTEM:
            return <ECommerce setSystem={setSystem} />;

        case System.AUTH_SYSTEM:
            return <Auth setSystem={setSystem} />;

        default:
            return null;
    }
};