import React from 'react';
import { Container } from './styles';

function Button(props) {
  return(
      <Container>
        <div style={{width: props.width, height: props.height}} className="button">{props.title}</div>
      </Container>
  );
}

export default Button;