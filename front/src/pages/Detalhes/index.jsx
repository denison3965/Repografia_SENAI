import React from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import Tabela_Registros from '../../components/Tabela_Registros'

import { Container, Adm_Area, Menu_Area, Information } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { Info } from '../../components/Tabela_Registros/styles';

import Impressao from '../../assets/img/impressao.png'
import Baixar from '../../assets/img/seta-para-baixo.png'
import { useHistory } from 'react-router-dom'


function Detalhes(props) {

      //Verificando Se o usuario esta autorizado para acessar essa pagina
      const history = useHistory()
    
      useEffect(() => {
          
  
          axios.get('http://localhost:3000/v1/teste', {
              method: 'GET',
              headers:  {'X-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3MDMyNzEyLCJleHAiOjE2MDcwMzMwMTJ9.9AR7MM57F3d7ATO_0zifm0BRYSXgCBh2cVFzgFMJNd4'}         
          }).then((res) => {
  
              if(res.data[0].auth)
              {
                  console.log('Voce tem acesso')
              }
              else
              {
                  history.push("/")
              }
  
          }).catch (() => {history.push("/")})
      }, [])
      //**Verificando Se o usuario esta autorizado para acessar essa pagina**

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

              <Information>
                <div className="left-side">
                  <div className="registro_item">
                    <div className="registro_chave"><strong>Numero da requisicao:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Nome da requisicao :</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Nome do solicitante: </strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>cc:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Departamento:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Arquivo solicitado para copia: </strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Cópias:</strong></div>
                    <div className="registro_valor_img">
                      <img src={Baixar} alt="impressora" style={{width: 20, height: 20}}/>
                      <p> apostila.pdf</p>   
                    </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Paginas do documento:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Total de paginas:</strong> </div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Coordenador: </strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                </div>
                <div className="right-side">

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Avaliado:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Data do pedido:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Data prevista pata entrega:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><span style={{color: 'red', textTransform: ''}}>Observação:</span></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Acabamento:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Imprimir:</strong></div>
                    <div className="registro_valor_img">
                      <img src={Impressao} alt="impressora" style={{width: 25, height: 25}}/>
                      <p> Click aqui para impremir</p>   
                    </div>
                  </div>

                </div>

              </Information>

              <p>{registro}</p>
          <p>basta pegar a variavel registro que tera o codigo do regidtro a ser mostrado e fazer um fetch para ppegar o respectivo registro</p>

          </Adm_Area>
          
      </Container>
  );
}

export default Detalhes;