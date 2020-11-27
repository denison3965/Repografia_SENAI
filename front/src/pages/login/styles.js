//para criar essa estrutura rode o snypts: styled-react
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #095B8A;

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
    height:30px; 
    left: 15%;
    top: 73%;
  }
  .links{
    position: relative;
    background-color: #Cafe;
    left: 15%;
    height: 13vh;
    width: 38.5vw;
    top: 75%;
  }
  .esqueci_senha{
    position: relative;
    left: 37%;
    width: 13vw;
    font-size: 2vw;
    top: 2%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5vh;
    line-height: 21px;
    text-align: center;

    color: #C11B04;
  }
  .Nao_acesso{
    position: relative;
    left: 0.01vw;
    right: 37%;
    top: 81%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5vh;
    line-height: 21px;
    text-align: center;

    color: #000000;

  }
  .o_que_fazer{
    position: relative;
    left: 12vw;
    width: 12vw;
    top: 81%;
    z-index: 999;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5vh;
    line-height: 21px;
    text-align: center;

    color: #C11B04;

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
`;


