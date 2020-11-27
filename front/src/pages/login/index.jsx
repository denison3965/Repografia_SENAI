//para criar essa estrutura rode o snypts: rfc
import React from 'react';
import { Container } from './styles';
import  Button  from '../../components/Button'
import Logo from '../../components/Logo'
import { Head } from './styles';

function login() {
  return (
      <Container>
        
        <div className="logo_posicao">
          <Logo width="100%" height="100%" color="black"/>
        </div>

          <form className="barra_cinza">
            <div className="nif_posicao">
              <label>
                NIF:
              </label>
            </div>
            <input type="text" name="nif" className="niftxt_posicao" />

            <div className="senha_posicao">
              <label>
                Senha:
              </label>
            </div>
            <input type="text" name="senha" className="senhatxt_posicao" />

            <div className="entrar_posicao">
              {<Button title="Entrar" font-size="3vw" width="100%" height="100%"/>}
            </div>

            <div className="links">

            <a href="#text1" className="esqueci_senha">Esqueci minha senha</a> 
            <text className="Nao_acesso">Não tenho acesso.</text>
            <a href="#text2" className="o_que_fazer">O que fazer?</a> 

            </div>
          </form>

      </Container>
  )
}

export default login;



