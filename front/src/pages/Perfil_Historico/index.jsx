import React, { useState, useEffect } from 'react';
import { Container, Nav_Header, Menu_InfoHistorico, Informacoes_Tabela } from './styles';
import Header from '../../components/Header'
import Tabela from '../../components/Tabela_De_Historico'
import InfoHistorico from '../../components/InfoHistorico'
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

function Perfil_Historico() {
    //Verificando Se o usuario esta autorizado para acessar essa pagina
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
                        <Nav_Header>
                            <Header />
                        </Nav_Header>

                        <Menu_InfoHistorico>
                            <InfoHistorico />
                        </Menu_InfoHistorico>

                        <Informacoes_Tabela>
                            <Tabela />
                        </Informacoes_Tabela>
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

export default Perfil_Historico;