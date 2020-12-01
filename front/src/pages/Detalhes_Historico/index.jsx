import React from 'react';
import Header from '../../components/Header'


import { Container, Adm_Area, Header_Area, Information } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { Info } from '../../components/Tabela_Registros/styles';

import Impressao from '../../assets/img/impressao.png'
import Baixar from '../../assets/img/seta-para-baixo.png'


function DetalhesHistorico(props) {

  //pegando o node do registro a ser mostrado ( tem que pegar o id depois )
  console.log(props.location.state.registro[0])

  const[registro, setRegistro] = useState('')

  useEffect(() => {
    setRegistro(props.location.state.registro[0])

  }, [])
  

  return (
      <Container>
          <Header_Area>
              <Header titulo="Historico" /> 
          </Header_Area>

          <Adm_Area>

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
                <div className="feedback">
                    <p><strong>Seu feedback?</strong></p>

                    <div className=""> 

                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" for="customRadio1">Chegou!!!!</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" for="customRadio2">Chegou, porém com uma qualidade ruim</label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" for="customRadio3">Não Chegou</label>
                      </div>

                    </div>


                    <button type="button" class="btn btn-primary">Enviar</button>
                </div>

                <div className="cancelar">
                    <p><strong>Deseja cancelar esse pedido ?</strong></p>
                    <button type="button" class="btn btn-light">Cancelar</button>
                </div>
              </Information>

              <p>{registro}</p>
          <p>basta pegar a variavel registro que tera o codigo do regidtro a ser mostrado e fazer um fetch para ppegar o respectivo registro</p>

          </Adm_Area>
          
      </Container>
  );
}

export default DetalhesHistorico;