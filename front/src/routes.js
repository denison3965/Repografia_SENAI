import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/login'
import Adm_Registros from './pages/Adm_Registros'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/adm/registros" component={Adm_Registros} />
        </Switch>
    </BrowserRouter>
)

export default Routes;