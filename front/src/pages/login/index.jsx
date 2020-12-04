//para criar essa estrutura rode o snypts: rfc
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { Head } from './styles';
import axios from 'axios'

function  Login() {

  
  
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
        <input type="text" name="nif" className="niftxt_posicao" />

        <div className="senha_posicao">
          <label>
            Senha:
              </label>
        </div>
        <input type="text" name="senha" className="senhatxt_posicao" />

        <div className="entrar_posicao">
          {<Button title="Entrar" font-size="3vw" width="100%" height="4.5vh" />}
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



