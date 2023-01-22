import React from 'react';
import './App.css';


import { NavBar } from './components/navbar'
import { PageLayout } from './components/pages/page-layout'


import { setCookie, getCookie, deleteCookie } from "./cookies-utils";

import { System } from './const'

function App() {

    const [system, setSystem] = React.useState<System>(System.AUTH_SYSTEM);

    return (
        <div className="App">
            <NavBar system={system} setSystem={setSystem}/>
            <PageLayout system={system} setSystem={setSystem}/>
        </div>
    );
}

export default App;
