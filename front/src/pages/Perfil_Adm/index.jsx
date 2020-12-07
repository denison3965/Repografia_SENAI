import React, { Component, useEffect, useState } from 'react';
import Nav_Lateral from '../../components/Nav_Lateral'
import User_Box_Info from '../../components/User_Box_Info'
import { Link } from 'react-router-dom'
import { Container, Adm_Area, Menu_Area, Info, Navegation } from './styles';
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

function Adm_Registros() {
        //Verificando Se o usuario esta autorizado para acessar essa pagina
        const history = useHistory()
        const [showPage, setShowPage] = useState(false)
      
        useEffect(() => {
            
          console.log('MEU TOKEN E ' + cookies.get('tokenJWT'))
          let token = cookies.get('tokenJWT')

            axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
                method: 'GET',
                headers:  {'X-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3MTMyMzQ3LCJleHAiOjE2MDcxMzI2NDd9.H8DhPaujH4c7YxxGy-UeSjVOk7Wi-v8vTfyDkb8M8lo'}       
            }).then((res) => {
    
                if(res.data[0].auth)
                {
                    console.log('Voce tem acesso')
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
          ? <Container>

            <Menu_Area>
              <Nav_Lateral ativado="1" />
            </Menu_Area>

            <Adm_Area>
              <div className="User_Box_Info_Area">
                <User_Box_Info />
                <hr></hr>

                <Navegation>
                  <ul>
                    <Link >
                      <li>Perfil adiministrador</li>
                    </Link>

                  </ul>
                </Navegation>

              </div>
              <Info>
                <div className="left_side">

                  <div className="Info_item">
                    <div className="Info_Key"><strong>NIF:</strong></div>
                    <div className="Info_Valor"></div>
                  </div>


                  <div className="Info_item">
                    <div className="Info_Key"><strong>Nome:</strong></div>
                    <div className="Info_Valor"></div>
                  </div>


                  <div className="Info_item">
                    <div className="Info_Key"><strong>Cargo:</strong></div>
                    <div className="Info_Valor"></div>
                  </div>

                </div>
                <div className="right_side">

                  <div className="Info_item">
                    <div className="Info_Key"><strong>Telefone:</strong></div>
                    <div className="Info_Valor"></div>
                  </div>


                  <div className="Info_item">
                    <div className="Info_Key"><strong>Email:</strong></div>
                    <div className="Info_Valor"></div>
                  </div>



                  <div className="password_box2">
                    <Link to="/historico-adm"><button type="button" class="btn btn-secondary">Historico</button></Link>
                  </div>

                  <div className="password_box">

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

                </div>
              </Info>
            </Adm_Area>
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




export default Adm_Registros;

