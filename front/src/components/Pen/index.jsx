import React from 'react';
import { Container, Pen } from './styles';
import Caneta from '../../assets/img/caneta.png';

// import { Container } from './styles';

function Pen() {
  return (
        <Container style={{width: props.width}}>
            <Pen src={Caneta} style={{width: props.width, height: props.height}}/>
        </Container>
    )
}

export default Pen;