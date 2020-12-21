import React from 'react';

import { Container, User_Info, Exit_Area, Titulo } from './styles';

import Avatar from '../../assets/img/avatar.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function User_Box_Info(props) {

  const history = useHistory()

  function fazerSingOut() {
    axios.post(`${process.env.REACT_APP_SERVER_BASE}/logout`)
      .then((res) => {

        let nullValue = res.data.token

        //Setando o token de autenticacao para nulo
        cookies.set('tokenJWT', nullValue, {path: '/'})

        history.push("/")
      })
  }

  return (
      <Container>
          <User_Info> 
            <img src={Avatar} style={{height: "60px", width: "60px", marginLeft: '20px' }} alt="avatar" />
            <Titulo> {props.nome + " " + props.sobrenome}</Titulo>
          </User_Info>

          <Exit_Area>
            <p onClick={() => fazerSingOut()}>SAIR</p>
          </Exit_Area>
      </Container>
  )
}

export default User_Box_Info;