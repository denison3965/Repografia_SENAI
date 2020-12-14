import React, { Component, useEffect, useState } from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import Tabela_Registros from '../../components/Tabela_Registros'
import { Link } from 'react-router-dom'
import { Container, Adm_Area, Menu_Area, Tabela, Navegation } from './styles';
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

function Adm_Registros() {




  //Verificando Se o usuario esta autorizado para acessar essa pagina
  const history = useHistory()
  const [showPage, setShowPage] = useState(false)
  const [infoUser, setInfoUser] = useState({nome: '', sobrenome: ''})


  useEffect(() => {

    console.log('MEU TOKEN E ' + cookies.get('tokenJWT'))
    var token = cookies.get('tokenJWT')

    axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
      method: 'GET',
      headers: { 'X-access-token': token }
    }).then((res) => {

      if (res.data[0].auth && res.data[0].adm == "sim") {
        console.log("Voce entrou no sistema como Adiministrador")
        setShowPage(true)

        //Pegando as informacoes do user pelo nif
        let url = "http://localhost:3000/v1/buscar-user-nif/" + `${res.data[0].nif}`

        axios.get(url).then(async (res) => {

          await setInfoUser(res.data)

        }).catch((err) => {
          console.log(err)
        })

      }
      else {
        console.log('estou no else')
        history.push("/")
      }

    }).catch((err) => {
      history.push("/")
      console.log('O erro e aqui ' + err)
    })
  }, [])
  //**Verificando Se o usuario esta autorizado para acessar essa pagina**


  return (

    <Container>

      <Menu_Area>
        <Nav_Lateral ativado="2" />
      </Menu_Area>

      {
        showPage
          ?
          <Adm_Area>
            <div className="User_Box_Info_Area">
              <User_Box_Info nome={infoUser.nome} sobrenome={infoUser.sobrenome}/>
              <hr></hr>

              <Navegation>
                <ul>
                  <Link >
                    <li>Registros</li>
                  </Link>

                </ul>
              </Navegation>

            </div>
            <Tabela>
              <Tabela_Registros />
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




export default Adm_Registros;



