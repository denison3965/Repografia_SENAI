import React from 'react';
import { Container } from './styles';

function Button(props) {
  return(
      <Container>
        <button style={{width: props.width, height: props.height}} className="button">{props.title}</button>
      </Container>
  );
}

export default Button;