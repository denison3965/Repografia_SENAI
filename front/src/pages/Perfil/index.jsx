import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Avatar from '../../assets/img/avatar.png';
import MaisInfo from '../../assets/img/maisInfo.png';

function perfil() {
  return (
      <Container>

          <Header/>

          <div className="sair">
              < div>Sair</div>
          </div>

          <div className="localizacao">
                <div className="seu_perfil">Seu Perfil</div>
                <div className="seu_historico">Seu Histórico</div>
          </div>
         
          <hr/>

          <div className="posicao_avatar">
             <img src={Avatar} style={{height: "300px", width: "300px", marginLeft: '20px', marginRight: '20px' }} alt="avatar" />
          </div>

          <div className="informacoes">
                <div className="telefone">Telefone:</div>
                <div className="numero">Número:</div>
                <div className="nif">NIF:</div>
          </div>

          <div className="informacao">
                    <div className="email">e-mail:</div>
                    <div className="cargo">Cargo:</div>
          </div>

          <div className="senha_posicao">
                <div>Editar Senha</div>
          </div>

          <div>
                <div className="posicao_requisicao">Nova Requisição
                <img src={MaisInfo} style={{height: "80px", width: "80px"}} className="posicao_maisinfo" alt="maisInfo"  />
                </div>
          </div>
      </Container>
  ) 
}

export default perfil;