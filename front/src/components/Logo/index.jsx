import React from 'react';
import { Container, LogoSenai, Titulo } from './styles';
import SENAI from '../../assets/img/senaiLogo.png'

function Logo(props) {
  return (
      <Container style={{width: props.width}}>
          <LogoSenai src={SENAI} style={{width: props.width, height: props.height}}/>
          <Titulo>Suíço-Brasileira "Paulo Ernesto Tolle"</Titulo>
          
      </Container>
  )
}

export default Logo;