import React from 'react';
import { Container } from './styles';
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const cookies = new Cookies()

function TabelaDeHistorico() {

  const history = useHistory()

  function fazerSingOut() {
     
    axios.post(`${process.env.REACT_APP_SERVER_BASE}/logout`)
      .then((res) => {

        let nullValue = res.data.token

        //Setando o token de autenticacao para nulo
        cookies.set('tokenJWT', nullValue, {path: '/'})

        history.push("/")
      })
  }

  function voltar() {
    window.history.back();
  }
  return(
      <Container>
         <div className="infoHistorico">
          <div className="password_box" onClick={voltar}>
            <Link><button type="button" class="btn btn-danger">Voltar</button></Link>
          </div>
           <div className="seu--historico">SEU HISTÓRICO</div>
           <div onClick={() => fazerSingOut()} className="sair--button">SAIR</div>
         </div>
      </Container>
  );
}

export default TabelaDeHistorico;