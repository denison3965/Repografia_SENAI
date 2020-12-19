import React from 'react';
import Header from '../../components/Header'


import { Container, Adm_Area, Header_Area, Information } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { Info } from '../../components/Tabela_Registros/styles';

import Impressao from '../../assets/img/impressao.png'
import Baixar from '../../assets/img/seta-para-baixo.png'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import Loading from '../../assets/img/loading.gif'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const loading = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 99,
}


function DetalhesHistorico(props) {

  //Verificando Se o usuario esta autorizado para acessar essa pagina
  const history = useHistory()
  const [showPage, setShowPage] = useState(false)


  useEffect(() => {

    console.log('MEU TOKEN E ' + cookies.get('tokenJWT'))
    var token = cookies.get('tokenJWT')

    axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
      method: 'GET',
      headers: { 'X-access-token': token }
    }).then((res) => {

      if (res.data[0].auth) {
        console.log('Voce tem acesso')
        setShowPage(true)

      }
      else {
        history.push("/")
      }

    }).catch(() => { history.push("/") })
  }, [])
  //**Verificando Se o usuario esta autorizado para acessar essa pagina**

  //pegando o node do registro a ser mostrado ( tem que pegar o id depois )
  console.log(props.location.state.registro[0])

  const [registro, setRegistro] = useState('')
  const [valorFeedback, setValorFeedback] = useState()
  const [msg_error, setMsgError] = useState()
  const [msg_acerto, setMsgAcerto] = useState()

  useEffect(() => {
    setRegistro(props.location.state.registro[0])

  }, [])

  //enviando feedback 
  function setarValorFeedback(e) {
    setValorFeedback(e.target.value)
    console.log(e.target.value)
  }

  function EnviarFeedback() {
    axios.put('http://localhost:3000/v1/atualizarFeedback', {
      feedback: valorFeedback,
      id_requisicao: registro
    })
      .then((res) => {
        if (res.data === 'Feedback enviado com sucesso !!') {
          setMsgError(null)
          setMsgAcerto(res.data)
         
        }
        else{
          setMsgAcerto(null)
          setMsgError(res.data)
        }
      })
  }



  return (
    <div>
      {
        showPage
          ?
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
                      <img src={Baixar} alt="impressora" style={{ width: 20, height: 20 }} />
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
                    <div className="registro_chave"><span style={{ color: 'red', textTransform: '' }}>Observação:</span></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Acabamento:</strong></div>
                    <div className="registro_valor"> </div>
                  </div>

                  <div className="registro_item">
                    <div className="registro_chave"><strong>Imprimir:</strong></div>
                    <div className="registro_valor_img">
                      <img src={Impressao} alt="impressora" style={{ width: 25, height: 25 }} />
                      <p> Click aqui para impremir</p>
                    </div>
                  </div>

                </div>
                <div className="feedback">
                  <p><strong>Seu feedback?</strong></p>

                  <div className="">

                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio1" name="customRadio" onClick={(e) => setarValorFeedback(e)} className="custom-control-input" value={1} />
                      <label className="custom-control-label" for="customRadio1">Chegou!!!!</label>
                      <p>{valorFeedback}</p>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" id="customRadio2" name="customRadio" onClick={(e) => setarValorFeedback(e)} className="custom-control-input" value={2} />
                      <label className="custom-control-label" for="customRadio2">Chegou, porém com uma qualidade ruim</label>
                      <p>{valorFeedback}</p>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                      <input type="radio" id="customRadio3" name="customRadio" onClick={(e) => setarValorFeedback(e)} className="custom-control-input" value={3} />
                      <label className="custom-control-label" for="customRadio3">Não Chegou</label>
                      <p>{valorFeedback}</p>
                    </div>

                  </div>


                  <button onClick={EnviarFeedback} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Enviar</button>
                </div>

                <div className="cancelar">
                  <p><strong>Deseja cancelar esse pedido ?</strong></p>
                  <button type="button" class="btn btn-light">Cancelar</button>
                </div>
              </Information>

              <p>{registro}</p>
              <p>basta pegar a variavel registro que tera o codigo do regidtro a ser mostrado e fazer um fetch para ppegar o respectivo registro</p>

            </Adm_Area>
            {/* Modal  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div>
                      {msg_error != null ? <div className="alert alert-danger">{msg_error} </div> : null}
                      {msg_acerto != null ? <div className="alert alert-success">{msg_acerto} </div> : null}
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Sair</button>
                  </div>
                </div>
              </div>
            </div>

          </Container>
          : <div>
            <div style={loading}>
              <img src={Loading} alt="loading"></img>
            </div>
          </div>
      }
    </div>


  );
}

export default DetalhesHistorico;