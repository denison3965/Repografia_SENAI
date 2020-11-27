import React from 'react';
import Login  from './pages/login'
import Formulario from './components/formulario'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Adm_Registros from './pages/Adm_Registros'
import Historico from './pages/Perfil_Historico'
import Detalhes from './pages/Detalhes'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/adm/registros" component={Adm_Registros} />
            <Route path="/Historico" component={Historico} />
            <Route path="/Formulario" component={Formulario}/>
            <Route path="/detalhes" render={(props) => <Detalhes {...props} data=""/>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;