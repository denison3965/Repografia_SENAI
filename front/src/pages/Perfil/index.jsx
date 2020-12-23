import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import avatar from '../../assets/img/avatar.png'
import Header from '../../components/Header';
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
   const [infoUser, setInfoUser] = useState({ nome: '', sobrenome: '' })
   const [senhaAtual, setSenhaAtual] = useState()
   const [novaSenha, setNovaSenha] = useState()
   const [confirmarSenha, setConfirmarSenha] = useState()
   const [msg_error, setMsgError] = useState()
   const [msg_acerto, setMsgAcerto] = useState()

   useEffect(() => {
      var token = cookies.get('tokenJWT')


      axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
         method: 'GET',
         headers: { 'X-access-token': token }
      }).then((res) => {

         if (res.data[0].auth) {
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
   }, [])
   //**Verificando Se o usuario esta autorizado para acessar essa pagina**


   function fazerSingOut() {
      axios.post(`${process.env.REACT_APP_SERVER_BASE}/logout`)
         .then((res) => {

            let nullValue = res.data.token

            //Setando o token de autenticacao para nulo
            cookies.set('tokenJWT', nullValue, { path: '/' })

            history.push("/")
         })
   }

   //confirmação de editar a senha 
   function editarSenha() {
      axios.put(`${process.env.REACT_APP_SERVER_BASE}/editarSenha`, {
         senhaAtual: senhaAtual,
         novaSenha: novaSenha,
         confirmarSenha: confirmarSenha,
         nif: infoUser.nif
      })

         .then((res) => {
            if (res.data == "Senha alterada com sucesso") {
               setMsgError(null)
               setMsgAcerto(res.data)
            } else {
               setMsgAcerto(null)
               setMsgError(res.data)
            }
         })

         .catch((err) => {
            console.log(err)
         })
   }




   return (
      <div>
         {
            showPage
               ?
               <Container>

                  <Header />

                  <div className="localizacao">
                     <Link to="/historico"><div type="button" className="btn btn-secondary">Seu Histórico</div></Link>
                     <div className="sair" onClick={() => fazerSingOut()}>SAIR</div>
                  </div>

                  <hr />

                  <form className="posicao_do_form">
                     <div className="infoUser">
                     <div className="posicao_avatar">
                        <img src={avatar} style={{ height: "100px", width: "100px", marginLeft: '50px', marginTop: "30px"}} alt="avatar" />
                     </div>
                        <div className="info--User">
                        <div style={{ marginTop: "-30px" }} className="info"> <strong style={{marginRight: "10px"}}> Nome: </strong>  {infoUser.nome} {infoUser.sobrenome}</div>
                        <div className="info"> <strong style={{marginRight: "10px"}}> E-mail: </strong>  {infoUser.email}</div>
                        <div style={{ marginTop: "10px" }} className="info"> <strong style={{marginRight: "10px"}}> Cargo: </strong> {infoUser.nome_cargo}</div>
                                                 
                        </div>
                        <div className="informacoes">
                           <div style={{ marginBottom: "10px" }} className="info"> <strong style={{marginRight: "10px"}}> NIF: </strong>  {infoUser.nif}</div>
                           <div className="info"> <strong style={{marginRight: "10px"}}>Telefone:</strong>{infoUser.telefone}</div>         
                        </div>
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
                                          <input onChange={(e) => setSenhaAtual(e.target.value)} style={{ width: "200px" }} name="senhaAtual" type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                       </div>
                                    </form>
                                    <form class="form-inline" style={{ margin: "40px" }}>
                                       <div class="form-group">
                                          <label style={{ marginRight: "30px" }} for="inputPassword6">Nova senha:     </label>
                                          <input onChange={(e) => setNovaSenha(e.target.value)} style={{ width: "200px" }} name="novaSenha" type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                       </div>
                                    </form>
                                    <form class="form-inline" style={{ margin: "40px" }}>
                                       <div class="form-group">
                                          <label for="inputPassword6">Confimar senha:</label>
                                          <input onChange={(e) => setConfirmarSenha(e.target.value)} style={{ width: "200px" }} name="confirmarSenha" type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                       </div>
                                    </form>
                                    <div>
                                       {msg_error != null ? <div className="alert alert-danger">{msg_error} </div> : null}
                                       {msg_acerto != null ? <div className="alert alert-success">{msg_acerto} </div> : null}
                                    </div>

                                 </div>
                              </div>
                              <div class="modal-footer">
                                 <button onClick={editarSenha} type="button" class="btn btn-primary">Alterar senha</button>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="Nova--requisicao">
                        <div className="posicao_requisicao">Nova Requisição
                            <Link to="/formulario"><img src={MaisInfo} className="iconeMais" alt="maisInfo" /></Link>
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