import React from 'react';
import Logo from '../../components/Logo'

import { Container, NavIcons } from './styles';

function Nav_Lateral() {
  return (
      <Container>
        <Logo></Logo>
        <NavIcons>
            <li>
                <img alt="banco img"/>
                <div>Registros</div>
            </li>
            <li>
                <img alt="Grafico img"/>
                <div>Registros</div>
            </li>
            <li>
                <img alt="pessoas img"/>
                <div>Registros</div>
            </li>
        </NavIcons>
      </Container>
  )
}

export default Nav_Lateral;