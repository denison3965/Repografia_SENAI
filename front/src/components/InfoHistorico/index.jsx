import React from 'react';
import { Container } from './styles';
import Button from '../../components/Button'

function TabelaDeHistorico() {
  return(
      <Container>
         <div className="infoHistorico">
           <div className="button--voltar"> 
           <Button width="100px" height="35px" title="VOLTAR"/> 
           </div>
           <div className="seu--historico">SEU HISTÓRICO</div>
           <div onClick="sair" className="sair--button">SAIR</div>
         </div>
      </Container>
  );
}

export default TabelaDeHistorico;