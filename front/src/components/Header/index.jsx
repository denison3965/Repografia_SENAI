import React from 'react';
import { Container } from './styles';
import Logo from '../Logo'

function Header() {
  return(
      <Container>
        <div className="logo--senai">
        <Logo width="150px" height="40px" />
        </div>
      </Container>
  )
}
export default Header;