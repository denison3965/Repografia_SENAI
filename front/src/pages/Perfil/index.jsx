import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';

function perfil() {
  return (
      <Container>

          <Header/>

          <div className="sair">
              <div>Sair</div>
          </div>
         
          <hr/>
      </Container>
  ) 
}

export default perfil;