import React from 'react';
import Login  from './pages/login'
import Header from './components/Header'
import NavLateral from './components/Nav_Lateral'
import Formulario from './components/formulario'
import InfoHistorico from './components/InfoHistorico'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Adm_Registros from './pages/Adm_Registros'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/adm/registros" component={Adm_Registros} />
            <Route  path="/historico" component={InfoHistorico} />
            <Route path="/Formulario" component={Formulario}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;