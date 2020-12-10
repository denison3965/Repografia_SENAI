import React from 'react';

import { Container, User_Info, Exit_Area, Titulo } from './styles';

import Avatar from '../../assets/img/avatar.png'

function User_Box_Info(props) {
  return (
      <Container>
          <User_Info> 
            <img src={Avatar} style={{height: "60px", width: "60px", marginLeft: '20px' }} alt="avatar" />
            <Titulo> {props.nome + " " + props.sobrenome}</Titulo>
          </User_Info>

          <Exit_Area>
            <div>SAIR</div>
          </Exit_Area>
      </Container>
  )
}

export default User_Box_Info;