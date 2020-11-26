//para criar essa estrutura rode o snypts: styled-react
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #095B8A;

  .barra_cinza{
    position: absolute;
    width: 540px;
    height: 100vh;
    left: 23%;
    background: #EEF1F2;
  }
  .nif_posicao{
    position: absolute;
    width: 369px;
    height: 30px;
    left: 32%;
    top: 205px;
    }
  .niftxt_posicao{
    position: absolute;
    width: 369px;
    height: 30px;
    left: 32%;
    top: 235px;
    }
  .senha_posicao{
    position: absolute;
    width: 369px;
    height: 30px;
    left: 32%;
    top: 270px;
    }
  .senhatxt_posicao{
    position: absolute;
    width: 369px;
    height: 30px;
    left: 32%;
    top: 300px;
    }
  .entrar_posicao{
    position: absolute;
    left: 29%;
    top: 310px;
  }
  .esqueci_senha{
    position: absolute;
    width: 125px;
    height: 30px;
    left: 45%;
    top: 380px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    text-align: center;

    color: #C11B04;
  }
  .Nao_acesso{
    position: absolute;
    width: 166px;
    height: 25px;
    left: 31%;
    top: 410px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    text-align: center;

    color: #000000;

  }
  .o_que_fazer{
    position: absolute;
    width: 90px;
    height: 25px;
    left: 58%;
    top: 410px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    text-align: center;

    color: #C11B04;

  }
  .logo_posicao{
    position: absolute;
    width: 395px;
    height: 94px;
    left: 30%;
    top: 5%;
    z-index: 999;
  }
`;


