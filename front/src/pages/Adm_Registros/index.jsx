import React from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import Tabela_Registros from '../../components/Tabela_Registros'

import { Container, Adm_Area, Menu_Area, Tabela } from './styles';

function Adm_Registros() {
  return (
      <Container>
          <Menu_Area>
              <Nav_Lateral ativado="1" /> 
          </Menu_Area>

          <Adm_Area>
              <div className="User_Box_Info_Area">
                <User_Box_Info />
                <hr></hr>
              </div>
              <Tabela> 
                <Tabela_Registros />
              </Tabela>
          </Adm_Area>
      </Container>
  );
}

export default Adm_Registros;