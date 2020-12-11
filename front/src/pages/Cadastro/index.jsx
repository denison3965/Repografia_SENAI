import React, { useEffect, useState } from 'react';
import Header from '../../components/Header'
import User_Box_Info from '../../components/User_Box_Info'
import { Link } from 'react-router-dom'
import AddIcon from '../../assets/img/add.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../assets/img/loading.gif'
import Cookies from 'universal-cookie'

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
      const [id_cargo, setId_cargo]= useState()
      const [nif, setNif] = useState()
      const[telefone, setTelefone] = useState()
      const [email, setEmail] = useState()
      const [administrativo, setAdministrativo] = useState()

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
          data_criacao: ( now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() )
      }

      function enviarFormulario() {
          params = `nif=${params.nif}&nome=${params.nome}&sobrenome=${params.sobrenome}&email=${params.email}&data_criacao=${params.data_criacao}&senha=Senai115&administrativo=${params.administrativo}&situacao=ativo&telefone=${params.telefone}` 
          axios.post('http://localhost:3000/v1/addfuncionarios', params).then(result => {
              console.log(result.data)
            
          })
      }
    
      useEffect(() => {

        console.log('MEU TOKEN E ' + cookies.get('tokenJWT'))
        var token = cookies.get('tokenJWT')
          
  
          axios.get( process.env.REACT_APP_SERVER_TO_AUTHENTICATE , {
              method: 'GET',
              headers:  {'X-access-token': token}         
          }).then((res) => {
  
              if(res.data[0].auth && res.data[0].adm === 'sim')
              {
                  console.log('Voce tem acesso como adiministrador')
                  setShowPage(true)

              }
              else
              {
                  history.push("/")
              }
  
          }).catch (() => {history.push("/")})
      }, [])
      //**Verificando Se o usuario esta autorizado para acessar essa pagina**

  return (

    <div>
      {
      showPage
        ?<Container>
          <Nav_Header>
            <Header />
          </Nav_Header>
    
          <Area_Cadastro>
            <div className="User_Box_Info_Area">
              <User_Box_Info />
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
    
              <div className="container_cadastro">
                <div className="top_info">
                  <img src={AddIcon} alt="pessoa" style={{ width: 50, height: 50 }} />
                  <h2>Cadastro</h2>
                </div>
                <form method="POST">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Nome</label>
                      <input type="text" name="nome" class="form-control" id="inputNome" placeholder="Ex: Pedro" required  onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Sobrenome</label>
                      <input type="text" name="sobrenome" class="form-control" id="inputNome" placeholder="Ex: Alves" required  onChange={e => setSobrenome(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Cargo</label>
                      <input type="text" name="id_cargo" class="form-control" id="inputCargo" placeholder="Ex: Professor"  required  onChange={e => setId_cargo(e.target.value)}/>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">NIF</label>
                      <input type="text" name="nif" class="form-control" id="inputNif" placeholder="Ex: 0000000"  required  onChange={e => setNif(e.target.value)} />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Telefone</label>
                      <input type="number" name="telefone" class="form-control" id="inputTelefone" placeholder="Ex: 11 98741-0000" onChange={e => setTelefone(e.target.value)}/>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="senai@senaisp.com.br" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    
                    <div class="form-group col-md-6">
                      <label for="inputState">O usuario tera acesso administartivo ?</label>
                      <select id="inputState" name="administrativo" class="form-control" onChange={e => setAdministrativo(e.target.value)}>
                        <option selected value="nao">não</option>
                        <option value="sim">sim</option>
                      </select>
                    </div>
    
                  </div>
                  <div className="area_botao">
    
                    <button type="button" class="btn btn-success" onClick={enviarFormulario} >Cadastrar</button>
                    <Link to="/funcionarios-cadastrados"><button type="button" class="btn btn-danger">Voltar</button></Link>
    
                  </div>
    
    
                </form>
              </div>
    
    
            </div>
          </Area_Cadastro>
        </Container>

        :<div>
        <div style={loading}>
          <img src={Loading} alt="loading"></img>
        </div>
      </div>
      }]
    </div>

    )
  }


export default Cadastro;