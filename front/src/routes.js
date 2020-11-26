import React from 'react';
import Login  from './pages/login'
import Header from './components/Header'
import NavLateral from './components/Nav_Lateral'
import Formulario from './components/formulario'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Formulario" component={Formulario}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;