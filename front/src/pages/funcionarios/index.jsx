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
import Loading from '../../assets/img/loading2.gif'
import Cookies from 'universal-cookie'

const cookies = new Cookies()


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
  const [infoUser, setInfoUser] = useState({nome: '', sobrenome: ''})

  useEffect(() => {
    var token = cookies.get('tokenJWT')


    axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
      method: 'GET',
      headers: { 'X-access-token': token }
    }).then((res) => {

      if (res.data[0].auth && res.data[0].adm === 'sim') {
        setShowPage(true)

        //Pegando as informacoes do user pelo nif
        let url = `${process.env.REACT_APP_SERVER_BASE}/buscar-user-nif/${res.data[0].nif}`

        axios.get(url).then(async (res) => {

          await setInfoUser(res.data)

        }).catch((err) => {
          console.log(err)
        })

      }
      else {
        history.push("/")
      }

    }).catch(() => { history.push("/") })
  }, [])
  //**Verificando Se o usuario esta autorizado para acessar essa pagina**
  return (

    <Container>
      <Menu_Area>
        <Nav_Lateral ativado="4" />
      </Menu_Area>

      {
        showPage
          ?
          <Adm_Area>
            <div className="User_Box_Info_Area">
              <User_Box_Info nome={infoUser.nome} sobrenome={infoUser.sobrenome}/>
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

          : <div>
            <div style={loading}>
              <img src={Loading} alt="loading"></img>
            </div>
          </div>
      }


    </Container>








  );
}

export default Funcionarios;