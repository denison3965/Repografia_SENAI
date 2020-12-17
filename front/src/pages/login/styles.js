//para criar essa estrutura rode o snypts: styled-react
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #095B8A;

  a{
    color: #c11b04;
  }
  .barra_cinza{
    position: absolute;
    width: 54.5vw;
    height: 100vh;
    left: 23%;
    background: #EEF1F2;
  }
  .nif_posicao{
    position: absolute;
    left: 15%;
    top: 45%;
    }
  .niftxt_posicao{
    position: absolute;
    width: 38.5vw;
    height: 6vh;
    left: 15%;
    top: 50%;
    }
  .senha_posicao{
    position: absolute;
    left: 15%;
    top: 59%;
    }
  .senhatxt_posicao{
    position: absolute;
    width: 38.5vw;
    height: 6vh;
    left: 15%;
    right: 25%;
    top: 64%;
    }
  .entrar_posicao{
    position: relative;
    width:38.5vw;
    height:45px; 
    left: 15%;
    top: 73%;
  }
  .esqueci_senha{
    position: relative;
    left: 15%;
    height: 5vh;
    width: 38.5vw;
    top: 75%;

    font-family: Roboto;
    font-size: 2.5vh;
    line-height: 21px;
    text-align: center;
  }
  .Nao_acesso{
    position: relative;
    width: 45%;
    left: 1%;
    top: 76%;

    font-family: Roboto;
    font-size: 2.5vh;
    line-height: 21px;
    text-align: center;

  }
  .o_que_fazer{
    position: relative;
    left: 35vw;
    width: 12vw;
    top: 74.5%;
    z-index: 999;

    font-family: Roboto;
    font-size: 2.5vh;
    line-height: 21px;
    text-align: center;
  }
  .logo_posicao{
    position: absolute;
    width: 41%;
    height: 5%;
    left: 30%;
    right: 26%;
    top: 7%;
    z-index: 999;
  }
  .hidden{
    visibility: hidden;
    background-color: red;
  }
  #LoginErrorDiv{
    position: relative;
    left: 15%;
    height: 5vh;
    width: 38.5vw;
    top: 77%;
    display: none;

    font-family: Roboto;
    font-size: 2.5vh;
    line-height: 21px;
    text-align: center;
  }
`;


