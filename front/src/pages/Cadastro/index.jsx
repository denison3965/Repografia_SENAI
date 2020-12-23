import React, { useEffect, useState } from 'react';
import Header from '../../components/Header'
import User_Box_Info from '../../components/User_Box_Info'
import { Link } from 'react-router-dom'
import AddIcon from '../../assets/img/add.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../assets/img/loading.gif'
import Cookies from 'universal-cookie'
import Select from 'react-select'

import { Container, Nav_Header, Area_Cadastro, Navegation } from './styles';

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




function Cadastro() {
  //Verificando Se o usuario esta autorizado para acessar essa pagina
  const history = useHistory()
  const [showPage, setShowPage] = useState(false)

  const [nome, setNome] = useState()
  const [sobrenome, setSobrenome] = useState()
  const [id_cargo, setId_cargo] = useState()
  const [nif, setNif] = useState()
  const [telefone, setTelefone] = useState("1156423400")
  const [email, setEmail] = useState()
  const [administrativo, setAdministrativo] = useState('nao')
  const [infoUser, setInfoUser] = useState({ nome: '', sobrenome: '' })
  const [cargos, setCargos] = useState([1, 2, 3, 4])
  const [msg_error, setMsgError] = useState()
  const [msg_acerto, setMsgAcerto] = useState()


  var now = new Date

  let params = {
    nome: nome,
    sobrenome: sobrenome,
    id_cargo: id_cargo,
    nif: nif,
    telefone: telefone,
    email: email,
    administrativo: administrativo,
    situacao: "ativo",
    data_criacao: (now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear())
  }


  useEffect(() => {
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

        //Pegando os cargos para listar
        axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-cargos`).then(async (res) => {
          const dados = res.data

          const options = dados.map(d => ({
            "value": d.id_cargo,
            "label": d.nome_cargo
          }))

          setCargos(options)

        })

      }
      else {
        history.push("/")
      }

    }).catch(() => { history.push("/") })
  }, [])
  //**Verificando Se o usuario esta autorizado para acessar essa pagina**


  function enviarFormulario() {
    params = `nif=${params.nif}&nome=${params.nome}&sobrenome=${params.sobrenome}&email=${params.email}&data_criacao=${params.data_criacao}&senha=Senai115&administrativo=${params.administrativo}&situacao=ativo&telefone=${params.telefone}&id_cargo=${params.id_cargo}`
    axios.post(`${process.env.REACT_APP_SERVER_BASE}/addfuncionarios`, params).then(result => {

      if (result.data == "OBS: Funcionario existente !!") {
        setMsgAcerto(null)
        setMsgError(result.data)
      } else {
        setMsgError(null)
        setMsgAcerto(result.data)
      }
    }).catch((err) => {
      console.log(err)
    })

  }

  return (

    <div>
      {
        showPage
          ? <Container>
            <Nav_Header>
              <Header />
            </Nav_Header>

            <Area_Cadastro>
              <div className="User_Box_Info_Area">
                <User_Box_Info nome={infoUser.nome} sobrenome={infoUser.sobrenome} />
                <hr></hr>

                <Navegation>
                  <ul>
                    <Link to="/funcionarios-cadastrados">
                      <li>Funcionários cadastrados</li>
                    </Link>

                    <li>/</li>

                    <Link>
                      <li>Cadastro</li>
                    </Link>


                  </ul>
                </Navegation>
              </div>

              <div className="container_cadastro">
                <div className="top_info">
                  <img src={AddIcon} alt="pessoa" style={{ width: 50, height: 50 }} />
                  <h2>Cadastro</h2>
                </div>

                <form class="needs-validation" novalidate>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Nome</label>
                      <input type="text" class="form-control" id="inputNome" placeholder="Ex: Pedro" required onChange={e => setNome(e.target.value)} />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Sobrenome</label>
                      <input type="text" class="form-control" id="inputNome" placeholder="Ex: Alves" required onChange={e => setSobrenome(e.target.value)} />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Cargo</label>
                      <Select options={cargos} isSearchable required onChange={e => setId_cargo(e.value)} />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">NIF</label>
                      <input type="text" class="form-control" id="inputNif" placeholder="Ex: 0000000" required onChange={e => setNif(e.target.value)} />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Telefone</label>
                      <input type="number" class="form-control" id="inputTelefone" placeholder="Ex: 11 00000-0000" required onChange={e => setTelefone(e.target.value)} />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="senai@senaisp.com.br" required onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div class="form-group col-md-6">
                      <label for="inputState">O usuario tera acesso administartivo ?</label>
                      <select id="inputState" name="administrativo" class="form-control" required onChange={e => setAdministrativo(e.target.value)}>
                        <option selected value="nao">não</option>
                        <option value="sim">sim</option>
                      </select>
                    </div>
                  </div>
                  <div className="area_botao">

                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onClick={enviarFormulario} >Cadastrar</button>
                    <Link to="/funcionarios-cadastrados"><button type="button" class="btn btn-danger">Voltar</button></Link>
                  </div>

                  <hr></hr>
                   <p style={{ color: "#b4a3a3", fontSize: "15px" }}>@Criado por Denison Portela, Ana L. Gomes, Felipe Braga, Guilherme Cunha e Caio Daniel !</p> 
                  {/* Modal */}
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
                </form>
              </div>

            </Area_Cadastro>
          </Container>

          : <div>
            <div style={loading}>
              <img src={Loading} alt="loading"></img>
            </div>
          </div>
      }
    </div>

  )
}

export default Cadastro


