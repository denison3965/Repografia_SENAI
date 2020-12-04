import React, { useEffect, useState } from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import Tabela_Funcionarios from '../../components/Tabela_Funcionarios'
import Tabela_Funcionatios_Excluidos from '../../components/Tabela_Funcionarios_Excluidos'
import { Link } from 'react-router-dom'
import AddIcon from '../../assets/img/add.png'

import { Container, Adm_Area, Menu_Area, Tabela, Navegation, AddUser } from './styles';
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

function Funcionarios() {
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
            <Menu_Area>
              <Nav_Lateral ativado="4" />
            </Menu_Area>

            <Adm_Area>
              <div className="User_Box_Info_Area">
                <User_Box_Info />
                <Link to="/cadastro">
                  <AddUser>
                    <img src={AddIcon} alt="usuario" />
                    <p>Adicionar um novo funcionario</p>
                  </AddUser>
                </Link>

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
                <Tabela_Funcionatios_Excluidos />
              </Tabela>
            </Adm_Area>
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

export default Funcionarios;