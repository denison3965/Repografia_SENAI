import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, MenuLateral, InfoBox, Navegation, Info, Title, Grafico, Tabela } from './styles';
import Nav_Lateral from '../../components/Nav_Lateral';
import User_Box_Info from '../../components/User_Box_Info';
import Graficos from '../../components/Graficos';
import { useHistory } from 'react-router-dom'
import Tabelas_estatistica from '../../components/Tabelas_estatistica'

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


function Mesa_Grafico() {
  //Verificando Se o usuario esta autorizado para acessar essa pagina
  const history = useHistory()
  const [showPage, setShowPage] = useState(false)
  const [infoUser, setInfoUser] = useState({ nome: '', sobrenome: '' })
  const [allInfoReq, setAllInfoReq] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [erros, setErros] = useState({ departamento: "", dados_requisição: "" });
  const [top5Req, setTop5Req] = useState();


  useEffect(() => {

    /*/
    /*    AUTENTICAÇÃO DA PÁGINA
    /*/

    var token = cookies.get('tokenJWT')

    axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
      method: 'GET',
      headers: { 'X-access-token': token }
    }).then((res) => {

      if (res.data[0].auth && res.data[0].adm === 'sim') {
        setShowPage(true)


        //Pegando as informacoes do user pelo nif
        let url = `${process.env.REACT_APP_SERVER_BASE}/buscar-user-nif/${res.data[0].nif}`

        axios.get(url).then(async (res) => {

          await setInfoUser(res.data)

        }).catch((err) => {
          console.log(err)
        })

      }
      else {
        history.push("/")
      }

    }).catch(() => { history.push("/") })

    /*/
    /*    AUTENTICAÇÃO DA PÁGINA
    /*/
    //**Verificando Se o usuario esta autorizado para acessar essa pagina**

    /*
     * GRAFICO 1 -
     */

    axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-top5-departamentos`).then((res) =>{
      setTop5Req(res.data)
    }).catch((err) => {
      setErros({departamento: "Não conseguimos acessar a base de dados para pegar os 5 departamentos que mais gastam"})
    })

    axios.get(`${process.env.REACT_APP_SERVER_BASE}/dados-graficos`).then((res) => {
      setDepartamentos(res.data)
    }).catch((err) => {
      setErros({dados_requisição: "Não conseguimos acessar a base de dados para pegar os dados de todos os departamentos"})
    })


    /*
     * GRAFICO 2 - 
     */










  }, [])






  return (

    <Container>

      <MenuLateral>
        <Nav_Lateral ativado="3" />
      </MenuLateral>

      {
        showPage
          ?
          <InfoBox>

            <div className="user_box_info">
              <User_Box_Info nome={infoUser.nome} sobrenome={infoUser.sobrenome} />
            </div>


            <div style={{ width: "80vw", marginLeft: "30px" }}>
              <hr></hr>
            </div>


            <Navegation>
              <ul>
                <Link >
                  <li>Relatórios</li>
                </Link>
              </ul>

            </Navegation>

            <Info>
              <Title>Relatórios</Title>
            </Info>

            {erros.dados_requisição != '' ?
              <div className="alert alert-danger">{erros.dados_requisição}</div>
              :
              <span></span>
            }
            {erros.departamento != '' ?
              <div className="alert alert-danger">{erros.departamento}</div>
              :
              <span></span>
            }

            <Grafico>
              {top5Req == undefined?
                <div>Erro ao Carregar os graficos, tente atualizar a página</div>
                :
                <Graficos data={top5Req} />
              }

            </Grafico>

            <Tabela>
              {departamentos == undefined ?
                <img src={Loading} alt="loading"></img>
                :
                <Tabelas_estatistica data={departamentos} />
              }

            </Tabela>

          </InfoBox>

          : <div>
            <div style={loading}>
              <img src={Loading} alt="loading"></img>
            </div>
          </div>
      }


    </Container>





  );
}

export default Mesa_Grafico;