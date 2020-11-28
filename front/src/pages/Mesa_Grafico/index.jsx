import React from 'react';
import { Container, MenuLateral,InfoBox } from './styles';
import Nav_Lateral from '../../components/Nav_Lateral';
import User_Box_Info from '../../components/User_Box_Info'


function Mesa_Grafico() {
  return(
      <Container>
          
          <MenuLateral>
            <Nav_Lateral/>
          </MenuLateral>

          <InfoBox>
            <User_Box_Info/>
          </InfoBox>

      </Container>
  );
}

export default Mesa_Grafico;