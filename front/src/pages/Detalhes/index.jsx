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
import axios from 'axios'
import Loading from '../../assets/img/loading2.gif'
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


function Detalhes(props) {

  //Verificando Se o usuario esta autorizado para acessar essa pagina
  const history = useHistory()
  const [showPage, setShowPage] = useState(false)
  const [infoReq, setInfoReq] = useState({ id_requisicao: '', nome_arquivo: '', nome_requisicao: '', nif: '', num_paginas: '', num_copias: '', total_paginas: '', observacao: '', data_envio: '', data_entrega: '', id_fornecedor: '', id_formato: '', id_suporte: '', id_departamento: '', id_arquivo: '', id_feedback: '', id_funcionario: '', })
  const [infoUser, setInfoUser] = useState({ nome: '', sobrenome: '' })




  //pegando o node do registro a ser mostrado ( tem que pegar o id depois )
  const [registro, setRegistro] = useState('')


  useEffect(() => {
    setRegistro(props.location.state.registro[0])

    var token = cookies.get('tokenJWT')

    axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
      method: 'GET',
      headers: { 'X-access-token': token }
    }).then((res) => {

      if (res.data[0].auth) {
        setShowPage(true)

        //Pegando as informacoes do user pela requisição
        let url = `${process.env.REACT_APP_SERVER_BASE}/pegar-uma-requisicao/${props.location.state.registro[0]}`
        axios.get(url).then(async (result) => {

          await setInfoReq(result.data[0])
          console.log(result)

        }).catch((err) => {
          console.log(err)
        })


        //Pegando as informacoes do user pelo nif
        let url2 = `${process.env.REACT_APP_SERVER_BASE}/buscar-user-nif/${res.data[0].nif}`

        axios.get(url2).then(async (res) => {

          await setInfoUser(res.data)


        }).catch((err) => {
          console.log(err)
        })

      }
      else {
        history.push("/")
      }



    }).catch(() => { history.push("/") })


  }, [])

  //**Verificando Se o usuario esta autorizado para acessar essa pagina**



  function baixarPDF() {


    let nome_pdf = `${registro}-requisicao.pdf`

    //Pegando pdf do servidor e imprimindo ele
    axios({
      url: `${process.env.REACT_APP_SERVER_BASE}/pegar-pdf-requisicao/${nome_pdf}`, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }

  function baixarArquivo() {


    //Pegando arquivo do servidor e imprimindo ele
    axios({
      url: `${process.env.REACT_APP_SERVER_BASE}/pegar-arquivo/${infoReq.nome_arquivo}`, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }

  return (

    <Container>
      <Menu_Area>
        <Nav_Lateral ativado="1" />
      </Menu_Area>

      {
        showPage
          ?
          <Adm_Area>
            <div className="User_Box_Info_Area">
              <User_Box_Info nome={infoUser.nome} sobrenome={infoUser.sobrenome} />
              <hr></hr>
            </div>

            <Information>
              <div className="left-side">
                <div className="registro_item">
                  <div className="registro_chave"><strong>Numero da requisicao:</strong></div>
                  <div className="registro_valor">{infoReq.id_requisicao}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Nome da requisicao :</strong></div>
                  <div className="registro_valor">{infoReq.nome_requisicao}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Nome do solicitante: </strong></div>
                  <div className="registro_valor">{infoReq.nome_fornecedor}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>cc:</strong></div>
                  <div className="registro_valor">{infoReq.centro_custo}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Departamento:</strong></div>
                  <div className="registro_valor">{infoReq.id_departamento}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Arquivo solicitado para copia: </strong></div>
                  <div className="registro_valor_img">
                    <img src={Baixar} alt="impressora" style={{ width: 20, height: 20 }} />
                    <p className="baixar_arquivo" onClick={() => baixarArquivo()}>Baixar arquivo</p>
                  </div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Cópias:</strong></div>
                  <div className="registro_valor">{infoReq.num_copias}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Paginas do documento:</strong></div>
                  <div className="registro_valor">{infoReq.num_paginas}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Total de paginas:</strong> </div>
                  <div className="registro_valor">{infoReq.total_paginas}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Coordenador: </strong></div>
                  <div className="registro_valor">{infoReq.total_paginas}</div>
                </div>

              </div>
              <div className="right-side">

                <div className="registro_item">
                  <div className="registro_chave"><strong>Feedback:</strong></div>
                  <div className="registro_valor">{infoReq.feedback}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Data do pedido:</strong></div>
                  <div className="registro_valor">{infoReq.data_envio}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Data prevista pata entrega:</strong></div>
                  <div className="registro_valor">{infoReq.data_entrega}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><span style={{ color: 'red', textTransform: '' }}>Observação:</span></div>
                  <div className="registro_valor">{infoReq.observacao}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Acabamento:</strong></div>
                  <div className="registro_valor">{infoReq.tipo_formato}</div>
                </div>

                <div className="registro_item">
                  <div className="registro_chave"><strong>Imprimir:</strong></div>
                  <div className="registro_valor_img">
                    <img src={Impressao} alt="impressora" style={{ width: 25, height: 25 }} />
                    <button style={{ marginLeft: 15 }} onClick={() => baixarPDF()} type="button" class="btn btn-primary">Click aqui para imprimir</button>
                  </div>
                </div>

              </div>

            </Information>

            {/* <p>{registro}</p>
            <p>basta pegar a variavel registro que tera o codigo do regidtro a ser mostrado e fazer um fetch para ppegar o respectivo registro</p> */}

          </Adm_Area>

          : <div>
            <div style={loading}>
              <img src={Loading} alt="loading"></img>
            </div>
          </div>
      }



    </Container>





  );
}

export default Detalhes;