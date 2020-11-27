import React from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import Tabela_Registros from '../../components/Tabela_Registros'

import { Container, Adm_Area, Menu_Area } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';


function Detalhes(props) {

  //pegando o node do registro a ser mostrado ( tem que pegar o id depois )
  console.log(props.location.state.registro[0])

  const[registro, setRegistro] = useState('')

  useEffect(() => {
    setRegistro(props.location.state.registro[0])

  }, [])
  

  return (
      <Container>
           <Menu_Area>
              <Nav_Lateral ativado="1" /> 
          </Menu_Area>

          <Adm_Area>
              <div className="User_Box_Info_Area">
                <User_Box_Info />
                <hr></hr>
              </div>

          </Adm_Area>
          <p>{registro}</p>
          <p>basta pegar a variavel registro que tera o codigo do regidtro a ser mostrado e fazer um fetch para ppegar o respectivo registro</p>
      </Container>
  );
}

export default Detalhes;