import React from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import Tabela_Funcionarios from '../../components/Tabela_Funcionarios'
import { Link } from 'react-router-dom'

import { Container, Adm_Area, Menu_Area, Tabela, Navegation } from './styles';

function funcionarios() {
  return (
      <Container>
           <Menu_Area>
              <Nav_Lateral ativado="3" /> 
          </Menu_Area>

          <Adm_Area>
              <div className="User_Box_Info_Area">
                <User_Box_Info />
                <hr></hr>

                <Navegation>
                  <ul>
                    <Link >
                      <li>Funcionários cadastrados</li>
                    </Link>

                  </ul>
                </Navegation>

              </div>
              <Tabela> 
                <Tabela_Funcionarios />
              </Tabela>

              <Tabela> 
                <Tabela_Funcionarios />
              </Tabela>
          </Adm_Area>
      </Container>
  );
}

export default funcionarios;