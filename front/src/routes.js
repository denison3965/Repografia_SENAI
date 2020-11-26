import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import TabelaDeHistorico from './pages/TabelaDeHistorico'
import Button from './components/Button'
import NavLateral from './components/Nav_Lateral'
import Logo from './components/Logo'
import Login from './pages/login'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route  path="/historico" component={TabelaDeHistorico} />
        </Switch>
    </BrowserRouter>
)

export default Routes;