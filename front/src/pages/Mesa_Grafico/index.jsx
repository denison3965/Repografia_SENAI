import React from 'react';
import { Link } from 'react-router-dom'
import { Container, MenuLateral, InfoBox, Navegation, Info, Title, Grafico, Tabela} from './styles';
import Nav_Lateral from '../../components/Nav_Lateral';
import User_Box_Info from '../../components/User_Box_Info';
import Graficos from '../../components/Graficos';
import TabelaBaixarPeriodo from '../../components/Tabela_BaixarPeriodo'


function Mesa_Grafico() {
  return (
    <Container>

      <MenuLateral>
        <Nav_Lateral ativado="2" />
      </MenuLateral>

      <InfoBox>
        
        <User_Box_Info />

        <div style={{width: "70vw", marginLeft:"100px"}}>
          <hr></hr>
        </div>
        

        <Navegation>
          <ul>
            <Link >
              <li>Relatórios</li>
            </Link>
          </ul>

        </Navegation>

        <Info>
         <Title>Relatórios</Title>
        </Info>

        <Grafico>
          <Graficos />
        </Grafico>

        <Tabela>
          <TabelaBaixarPeriodo />
        </Tabela>

      </InfoBox>
    </Container>
  );
}

export default Mesa_Grafico;