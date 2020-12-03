import React from 'react';
import Login  from './pages/login'
import Formulario from './pages/Formulario'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Adm_Registros from './pages/Adm_Registros'
import Perfil from './pages/Perfil'
import Historico from './pages/Perfil_Historico'
import Detalhes from './pages/Detalhes'
import DetalhesHistorico from './pages/Detalhes_Historico'
import Graficos from './pages/Mesa_Grafico'
import Funcionarios from './pages/funcionarios'
import Cadastro from './pages/Cadastro'
import PerfilAdm from './pages/Perfil_Adm'
import HistoricoAdm from './pages/Historico_Adm'
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ... rest}) => (


    <Route
    {...rest}
    render={props =>

      

      {
        let teste
        // console.log(isAuthenticated())
        
         isAuthenticated().then((res) =>{
           console.log("Meu testtttttttte " + res)
          res ? (
            <Component {...props} />
        
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
         } )
        
      }
      // isAuthenticated() == true ? (
      //   <Component {...props} />
        
      // ) : (
      //   <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      // )
    }
  />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute path="/registros" component={Adm_Registros} />
            <PrivateRoute path="/Historico" component={Historico} />
            <PrivateRoute path="/Formulario" component={Formulario}/>
            <PrivateRoute path="/graficos" component={Graficos}/>
            <PrivateRoute path="/Perfil" component={Perfil}/>
            <PrivateRoute path="/detalhes/:nif" render={(props) => <Detalhes {...props} data=""/>}/>
            <PrivateRoute path="/detalhes-historicos/:nif" render={(props) => <DetalhesHistorico {...props} data=""/>}/>
            <PrivateRoute path="/funcionarios-cadastrados" component={Funcionarios}/>
            <PrivateRoute path="/cadastro" component={Cadastro} />
            <PrivateRoute path="/perfil-adm" component={PerfilAdm} />
            <PrivateRoute path="/historico-adm" component={HistoricoAdm} />
        </Switch>
    </BrowserRouter>
)

export default Routes;