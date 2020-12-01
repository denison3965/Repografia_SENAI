import React from 'react';
import { Container } from './styles';
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

function TabelaDeHistorico() {
  return(
      <Container>
         <div className="infoHistorico">
           <div className="button--voltar"> 
           <Link to="/perfil"><Button width="100px" height="35px" title="VOLTAR"/></Link> 
           </div>
           <div className="seu--historico">SEU HISTÓRICO</div>
           <div onClick="sair" className="sair--button">SAIR</div>
         </div>
      </Container>
  );
}

export default TabelaDeHistorico;