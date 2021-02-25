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

    var requisicoes

    //Pegando informações de todas as requisiçoẽs 
    axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-requisicao`).then((res) => {
      setAllInfoReq(res.data)
      requisicoes = res.data

    }).catch((error) => {
      setErros({ dados_requisição: "Erro ao carregar os dados para alimentar o grafíco" })
      alert(erros)
    })

    //Pegando informaçôes do departamento
    axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-departamento`).then((res) => {

      let data = res.data

      //Adicionando campo de folhas usadas e todos os departamento
      data.map((element) => {
        element.folhas_usadas = 0
      })
      setDepartamentos(data)
      var departamentos = data

    /* 
    *  PEGANDO QUANTIDADES DE FOLHAS GASTA POR DEPARTAMENTO
    */

      requisicoes.map((req) => {
        switch (req.id_departamento) {
          case 1:
            departamentos[0].folhas_usadas += req.total_paginas
            break;

          case 2:
            departamentos[1].folhas_usadas += req.total_paginas
            break;

          case 3:
            departamentos[2].folhas_usadas += req.total_paginas
            break;


          case 4:
            departamentos[3].folhas_usadas += req.total_paginas
            break;


          case 5:
            departamentos[4].folhas_usadas += req.total_paginas
            break;


          case 6:
            departamentos[5].folhas_usadas += req.total_paginas
            break;


          case 7:
            departamentos[6].folhas_usadas += req.total_paginas
            break;


          case 8:
            departamentos[7].folhas_usadas += req.total_paginas
            break;


          case 9:
            departamentos[8].folhas_usadas += req.total_paginas
            break;


          case 10:
            departamentos[9].folhas_usadas += req.total_paginas
            break;


          case 11:
            departamentos[10].folhas_usadas += req.total_paginas
            break;


          case 12:
            departamentos[11].folhas_usadas += req.total_paginas
            break;

          default:
            break;
        }
      })





      let top5 = []

      /*
          ALGORITIMO PARA PEGAR O 5 DEPARTAMENTO QUE MAIS GASTARAM
      */
      
        departamentos.map((element) => {
          let aux = 0

          departamentos.map((element2) => {
            if (element.folhas_usadas < element2.folhas_usadas) {
              aux++
            }
          })

          if (aux < 5) {
            top5.push(element)
          }
          
        })


      setTop5Req(top5)



    }).catch((error) => {
      setErros({ departamento: "Erro ao carregado os departamento para alimentar os gráfico" })
      alert(erros)
    })



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

            <Grafico>
              {top5Req == undefined ?
                <div>Erro</div>
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