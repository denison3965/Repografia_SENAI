import React from 'react';
import { Container, LogoSenai, Titulo } from './styles';
import SENAI from '../../assets/img/senaiLogo.png'

function Logo() {
  return (
      <Container>
          <LogoSenai src={SENAI}/>
          <Titulo>Senai suico</Titulo>
          
      </Container>
  )
}

export default Logo;