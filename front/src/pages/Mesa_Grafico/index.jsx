import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, MenuLateral, InfoBox, Navegation, Info, Title, Grafico, Tabela, Date_Area } from './styles';
import Nav_Lateral from '../../components/Nav_Lateral';
import User_Box_Info from '../../components/User_Box_Info';
import Graficos from '../../components/Graficos';
import Grafico_Barra from '../../components/Grafico_barra';
import { useHistory } from 'react-router-dom'
import Tabelas_estatistica from '../../components/Tabelas_estatistica'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios'
import Loading from '../../assets/img/loading2.gif'
import Loading3 from '../../assets/img/loading3.gif'
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
  const [departamentos, setDepartamentos] = useState([]);
  const [erros, setErros] = useState({ departamento: "", dados_requisição: "" });
  const [top5Req, setTop5Req] = useState();
  const [top5Funcionarios, setTop5Funcionarios] = useState();
  const [dadosFuncionarios, setDadosFuncionarios] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [dateMillis, setDateMillis] = useState(Date.now());
  const [dateMillis2, setDateMillis2] = useState(Date.now());
  const [dateToShow, setDateToShow] = useState(null);
  const [dateToShow2, setDateToShow2] = useState(null);
  


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

    axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-top5-departamentos/null/null`).then((res) => {
      setTop5Req(res.data)
    }).catch((err) => {
      setErros({ departamento: "Não conseguimos acessar a base de dados para pegar os 5 departamentos que mais gastam" })
    })

    axios.get(`${process.env.REACT_APP_SERVER_BASE}/dados-graficos/null/null`).then((res) => {
      setDepartamentos(res.data)
    }).catch((err) => {
      setErros({ dados_requisição: "Não conseguimos acessar a base de dados para pegar os dados de todos os departamentos" })
    })


    /*
     * GRAFICO 2 - 
     */
    axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-top5-funcionarios/null/null`).then((res) => {
      setTop5Funcionarios(res.data)

    }).catch((err) => {
      setErros({ dados_requisição: "Não conseguimos acessar a base de dados para pegar os dados de todos os departamentos" })
    })

    axios.get(`${process.env.REACT_APP_SERVER_BASE}/dados-grafico-funcionario/null/null`).then(async(res) => {
      setDadosFuncionarios(await res.data)
      console.log("MANUTENÇÕA")
      console.log(res.data)

    }).catch((err) => {
      setErros({ dados_requisição: "Não conseguimos acessar a base de dados para pegar os dados de todos os departamentos" })
    })







  }, [])


  function getDateAndCovertToMilles(date) {

    //Funcao para converter data em PT/BR para ENG
    function dateToEN(myDate) {
     return myDate.split('/').reverse().join('-');
   }


   let day = date.getDate();
   let mounth = date.getMonth() + 1;
   let year = date.getFullYear();

   let complety_date = day+"/"+mounth+"/"+year;


   //Pegando a data de envio e convertendo para mmilisegundos
   let dateEmMilli = Date.parse(dateToEN(complety_date));

   setDateMillis(dateEmMilli)
 }


 function getDateAndCovertToMilles2(date) {

  //Funcao para converter data em PT/BR para ENG
  function dateToEN(myDate) {
   return myDate.split('/').reverse().join('-');
 }


 let day = date.getDate();
 let mounth = date.getMonth() + 1;
 let year = date.getFullYear();

 let complety_date = day+"/"+mounth+"/"+year;


 //Pegando a data de envio e convertendo para mmilisegundos
 let dateEmMilli = Date.parse(dateToEN(complety_date));

 setDateMillis2(dateEmMilli)
}

function filtraEstatisticasPelaData () {
  
  let de = dateMillis
  let ate =  dateMillis2

  //GRAFICO 1
  axios.get(`${process.env.REACT_APP_SERVER_BASE}/dados-graficos/${de}/${ate}`).then((res) => {
    setDepartamentos(res.data)
  }).catch((err) => {
    setErros({ dados_requisição: "Não conseguimos acessar a base de dados para pegar os dados de todos os departamentos" })
  })

  axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-top5-departamentos/${de}/${ate}`).then((res) => {
    setTop5Req(res.data)
  }).catch((err) => {
    setErros({ departamento: "Não conseguimos acessar a base de dados para pegar os 5 departamentos que mais gastam" })
  })


  //GRAFICO 2
  axios.get(`${process.env.REACT_APP_SERVER_BASE}/dados-grafico-funcionario/${de}/${ate}`).then((res) => {
    setDadosFuncionarios(res.data)
    alert("Dados atualizados com sucesso")
  }).catch((err) => {
    setErros({ dados_requisição: "Não conseguimos acessar a base de dados para pegar os dados de todos os departamentos" })
  })

  axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-top5-funcionarios/${de}/${ate}`).then((res) => {
    setTop5Funcionarios(res.data)

  }).catch((err) => {
    setErros({ dados_requisição: "Não conseguimos acessar a base de dados para pegar os dados de todos os departamentos" })
  })


  setDateToShow(startDate)
  setDateToShow2(startDate2)


} 




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
                 {dateToShow == null ? 
                    <Title>Relatórios Geral</Title>
                  :
                  <div>
                    <Title>Relatórios</Title>
                    <p style={{marginLeft: 30}}>De : {dateToShow.getDate()}/{dateToShow.getMonth() + 1}/{dateToShow.getFullYear()}, Ate : {dateToShow2.getDate()}/{dateToShow2.getMonth() + 1}/{dateToShow2.getFullYear()}</p>
                  </div>

                 
                  }
            </Info>

            <hr style={{marginLeft:30}}></hr>
            <Date_Area>
              <div className="titulo_date"><span>*</span> <p><strong>Escolha uma data de início e outra de final para filtrar o período dos relatórios.</strong></p></div>
              
              <div className="date_area">
                
                <div className="date_area_into">
                  <span>De : </span>
                  <DatePicker selected={startDate} onChange={date => {{setStartDate(date); getDateAndCovertToMilles(date)}}}  dateFormat="dd/MM/yyyy" />
                </div>

                <div className="date_area_into">
                  <span>Até : </span>
                  <DatePicker selected={startDate2} onChange={date => {setStartDate2(date); getDateAndCovertToMilles2(date)}} dateFormat="dd/MM/yyyy" />
                </div>

                <button type="button" class="btn btn-info" onClick={() => {filtraEstatisticasPelaData()}}>Filtrar resultado</button>
                
              </div>
              
            </Date_Area>
            <hr style={{marginLeft:30}}></hr>

           

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


              <div className="espaco_grafico_1">
                {top5Req == undefined || top5Funcionarios == undefined ?
                  <div>
                    <img src={Loading3} alt="loading" style={{ width: "120px", height: "100px" }}></img>
                    <p style={{ marginLeft: "-70px" }}>Carregando gráfico dos departamentos</p>
                  </div>
                  :
                  <Graficos data={top5Req} />
                }
              </div>

              <div className="espaco_grafico_2">
                {top5Funcionarios == undefined || top5Req == undefined ?
                  <div>
                    <img src={Loading3} alt="loading" style={{ width: "120px", height: "100px" }}></img>
                    <p style={{ marginLeft: "-60px" }}>Carregando gráfico dos funcionários</p>
                  </div>
                  :
                  <Grafico_Barra data2={top5Funcionarios} />
                }
              </div>


            </Grafico>

            <Tabela>
              {departamentos == undefined || dadosFuncionarios == undefined ?
                <div className="loading_tabela">
                  <img src={Loading3} alt="loading" style={{ width: "120px", height: "100px" }}></img>
                  <p style={{ marginLeft: "-250px", marginTop: "150px"  }}>Carregando Tabelas dos departamentos e funcionários</p>
                </div>

                :

                <Tabelas_estatistica data={departamentos} data2={dadosFuncionarios} />
              }

            </Tabela>

          </InfoBox>

          : <div>
            <div style={loading}>
              <img src={Loading3} alt="loading"></img>
              <p>Estamos preparando os dados estatísticos para você, por favor aguarde ...</p>
            </div>
          </div>
      }


    </Container>





  );
}

export default Mesa_Grafico;