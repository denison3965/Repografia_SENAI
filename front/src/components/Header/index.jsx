import React from 'react';
import { Container,Titulo } from './styles';
import Logo from '../Logo'

function Header(props) {
  return(
      <Container>
        <div className="logo--senai">
         <Logo width="150px" height="40px" fontSize="15px" />
        </div>
        <Titulo> {props.title} </Titulo>
      </Container>
  )
}
export default Header;