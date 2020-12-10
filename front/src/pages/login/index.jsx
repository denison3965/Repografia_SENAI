//para criar essa estrutura rode o snypts: rfc
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { Head } from './styles';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function  Login() {

  const history = useHistory()

  const [nif, setNif] = useState('')
  const [password, setPassword] = useState('')

  const enviarFormulario = () => {
    console.log( "senha :" +password + "nif" + nif)
    axios.post('http://localhost:3000/v1/login',{
      nif: nif,
      password: password
    })
    .then((res) => {
      let token = res.data.token

      cookies.set('tokenJWT', token, {path: '/'})
      console.log(res.data)

      if (res.data.message == 'Login valido' && res.data.isAd == "sim") 
      {
         history.push("/perfil-adm")
        
      }

      if (res.data.message == 'Login valido' && res.data.isAd == "nao") 
      {
         history.push("/perfil")
        
      }


    })
    
  }
  
  return (
    
    <Container>

      <div className="logo_posicao">
        <Logo width="100%" height="100%" color="black" />
      </div>

      <form className="barra_cinza">
        <div className="nif_posicao">
          <label>
            NIF:
              </label>
        </div>
        <input type="number" min="0" name="nif" className="niftxt_posicao" onChange={(e) => setNif(e.target.value)}/>

        <div className="senha_posicao">
          <label>
            Senha:
              </label>
        </div>
        <input type="password" name="senha" className="senhatxt_posicao" onChange={(e) => setPassword(e.target.value)} />

        <div className="entrar_posicao" onClick={enviarFormulario}>
          {<Button title="Entrar" font-size="3vw" width="100%" height="4.5vh"  />}
        </div>

        <div className="esqueci_senha">
          <a href="#text1" data-toggle="modal" data-target="#exampleModal">Esqueci minha senha</a>
        </div>

        {/* Modal 'esqueci minha senha' */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Esqueci minha senha</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="oqueFazer">
                  O que vc tem que fazer é ir falar com sua supervisora
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Sair</button>
              </div>
            </div>
          </div>
        </div>

        

        <div className="Nao_acesso">
          <text>Não tenho acesso.</text>
        </div>

        <div className="o_que_fazer">
          <a href="#text2" data-toggle="modal" data-target="#exampleModal" >O que fazer?</a>
        </div>

        {/* Modal 'o que fazer' */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">O que fazer?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="oqueFazer">
                  O que vc tem que fazer é ir falar com sua supervisora
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Sair</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </Container>
  )
}

export default Login;



