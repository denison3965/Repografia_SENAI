import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Avatar from '../../assets/img/avatar.png';
import MaisInfo from '../../assets/img/maisInfo.png';
import { Link } from 'react-router-dom'
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

function Perfil() {
   //Verificando Se o usuario esta autorizado para acessar essa pagina
   const history = useHistory()
   const [showPage, setShowPage] = useState(false)
   const [infoUser, setInfoUser] = useState({nome: '', sobrenome: ''})

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

            //Pegando as informacoes do user pelo nif
            let url = "http://localhost:3000/v1/buscar-user-nif/" + `${res.data[0].nif}`

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
   }, [])
   //**Verificando Se o usuario esta autorizado para acessar essa pagina**



  function fazerSingOut() {
    axios.post('http://localhost:3000/v1/logout')
      .then((res) => {

        let nullValue = res.data.token

        //Setando o token de autenticacao para nulo
        cookies.set('tokenJWT', nullValue, {path: '/'})

        history.push("/")
      })
  }
   return (
      <div>
         {
            showPage
               ?
               <Container>

                  <Header />

                  <div className="sair">
                     <div onClick={() => fazerSingOut()}>SAIR</div>
                  </div>

                  <div className="localizacao">
                     <div className="seu_perfil">Seu Perfil</div>
                     <Link to="/historico"><div className="seu_historico">Seu Histórico</div></Link>
                  </div>

                  <hr />

                  <form className="posicao_do_form">

                     <div className="posicao_avatar">
                        <img src={Avatar} style={{ height: "300px", width: "300px", marginLeft: '20px', marginRight: '20px' }} alt="avatar" />
                     </div>

                     <div className="informacoes">
                        <div className="telefone">Telefone: {infoUser.telefone}</div>
                        <div className="numero">Nome: {infoUser.nome} {infoUser.sobrenome}</div>
                        <div className="nif">NIF: {infoUser.nif}</div>
                     </div>

                     <div className="informacao">
                        <div className="email">e-mail: {infoUser.email}</div>
                        <div className="cargo">Cargo:</div>
                     </div>

                     <div className="senha_posicao">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                           Editar senha
                        </button>
                     </div>

                     {/* Modal  */}
                     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalLabel">Editar senha</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <div className="senha">
                                    <form class="form-inline" style={{ margin: "40px" }}>
                                       <div class="form-group">
                                          <label style={{ marginRight: "30px" }} for="inputPassword6">Senha atual:      </label>
                                          <input style={{ width: "200px" }} type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                       </div>
                                    </form>
                                    <form class="form-inline" style={{ margin: "40px" }}>
                                       <div class="form-group">
                                          <label style={{ marginRight: "30px" }} for="inputPassword6">Nova senha:     </label>
                                          <input style={{ width: "200px" }} type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                       </div>
                                    </form>
                                    <form class="form-inline" style={{ margin: "40px" }}>
                                       <div class="form-group">
                                          <label for="inputPassword6">Confimar senha:</label>
                                          <input style={{ width: "200px" }} type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                       </div>
                                    </form>
                                 </div>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-primary">Alterar senha</button>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div>
                        <div className="posicao_requisicao">Nova Requisição
                <Link to="/formulario"><img src={MaisInfo} style={{ height: "80px", width: "80px" }} className="posicao_maisinfo" alt="maisInfo" /></Link>
                        </div>
                     </div>

                  </form>
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

export default Perfil;