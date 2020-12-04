import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, MenuLateral, InfoBox, Navegation, Info, Title, Grafico, Tabela } from './styles';
import Nav_Lateral from '../../components/Nav_Lateral';
import User_Box_Info from '../../components/User_Box_Info';
import Graficos from '../../components/Graficos';
import TabelaBaixarPeriodo from '../../components/Tabela_BaixarPeriodo'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import Loading from '../../assets/img/loading.gif'

const loading = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 99,
}


function Mesa_Grafico() {
       //Verificando Se o usuario esta autorizado para acessar essa pagina
       const history = useHistory()
       const [showPage, setShowPage] = useState(false)
     
       useEffect(() => {
           
   
           axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
               method: 'GET',
               headers:  {'X-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3MDMyNzEyLCJleHAiOjE2MDcwMzMwMTJ9.9AR7MM57F3d7ATO_0zifm0BRYSXgCBh2cVFzgFMJNd4'}         
           }).then((res) => {
   
               if(res.data[0].auth)
               {
                   console.log('Voce tem acesso')
                   setShowPage(true)
 
               }
               else
               {
                   history.push("/")
               }
   
           }).catch (() => {history.push("/")})
       }, [])
       //**Verificando Se o usuario esta autorizado para acessar essa pagina**
  return (
    <div>
      {
        showPage
          ?
          <Container>

            <MenuLateral>
              <Nav_Lateral ativado="3" />
            </MenuLateral>

            <InfoBox>

              <div className="user_box_info">
                <User_Box_Info />
              </div>


              <div style={{ width: "80vw", marginLeft: "30px" }}>
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
          : <div>
            <div style={loading}>
              <img src={Loading} alt="loading"></img>
            </div>
          </div>
      }
    </div>




  );
}

export default Mesa_Grafico;