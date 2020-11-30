import React from 'react';
import SaibaMaisInfo from '../../assets/img/maisInfo.png'
import {Link} from 'react-router-dom'
import { Container } from './styles';

function SaibaMais(props) {

  return (
      <Container >
        <Link to={{
          pathname: `/${props.caminho}/:${props.data}`,
          state: {registro: [props.data]}
        }} >
          <img src={SaibaMaisInfo} alt="Saiba mais" style={{width: '25px', height: '25px'}}/>
        </Link>  
      </Container>
  )
}

export default SaibaMais;