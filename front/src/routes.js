import React from 'react';
import Login  from './pages/login'
import Formulario from './pages/Formulario'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Adm_Registros from './pages/Adm_Registros'
import Perfil from './pages/Perfil'
import Historico from './pages/Perfil_Historico'
import Graficos from './pages/Mesa_Grafico'
import Detalhes from './pages/Detalhes'
import DetalhesHistorico from './pages/Detalhes_Historico'
import Funcionarios from './pages/funcionarios'
import Cadastro from './pages/Cadastro'
import PerfilAdm from './pages/Perfil_Adm'
import HistoricoAdm from './pages/Historico_Adm'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/registros" component={Adm_Registros} />
            <Route path="/Historico" component={Historico} />
            <Route path="/Formulario" component={Formulario}/>
            <Route path="/graficos" component={Graficos}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/detalhes/:nif" render={(props) => <Detalhes {...props} data=""/>}/>
            <Route path="/detalhes-historicos/:nif" render={(props) => <DetalhesHistorico {...props} data=""/>}/>
            <Route path="/funcionarios-cadastrados" component={Funcionarios}/>
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/perfil-adm" component={PerfilAdm} />
            <Route path="/historico-adm" component={HistoricoAdm} />
        </Switch>
    </BrowserRouter>
)

export default Routes;