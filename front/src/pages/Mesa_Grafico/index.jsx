import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, MenuLateral, InfoBox, Navegation, Info, Title, Grafico, Tabela } from './styles';
import Nav_Lateral from '../../components/Nav_Lateral';
import User_Box_Info from '../../components/User_Box_Info';
import Graficos from '../../components/Graficos';
import TabelaBaixarPeriodo from '../../components/Tabela_BaixarPeriodo'
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


function Mesa_Grafico() {
  //Verificando Se o usuario esta autorizado para acessar essa pagina
  const history = useHistory()
  const [showPage, setShowPage] = useState(false)
  const [infoUser, setInfoUser] = useState({ nome: '', sobrenome: '' })
  

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

      <MenuLateral>
        <Nav_Lateral ativado="3" />
      </MenuLateral>

      {
        showPage
          ?
          <InfoBox>

            <div className="user_box_info">
            <User_Box_Info nome={infoUser.nome} sobrenome={infoUser.sobrenome}/>
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

          : <div>
            <div style={loading}>
              <img src={Loading} alt="loading"></img>
            </div>
          </div>
      }


    </Container>





  );
}

export default Mesa_Grafico;