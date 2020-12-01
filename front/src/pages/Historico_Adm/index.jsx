import React, { Component } from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import { Link } from 'react-router-dom'
import { Container, Adm_Area, Menu_Area, Tabela, Navegation } from './styles';
import TabelaHistorico from '../../components/Tabela_De_Historico'

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

          <Navegation>
            <ul>
              <Link >
                <li>Perfil adiministrador</li>
              </Link>

            </ul>
          </Navegation>

        </div>
        <Tabela>
          <TabelaHistorico />

          <div className="password_box">
              
            <Link to="/perfil-adm"><button type="button" class="btn btn-danger">Voltar</button></Link>
          </div>
        </Tabela>
      </Adm_Area>
    </Container>
  );
}




export default Adm_Registros;

