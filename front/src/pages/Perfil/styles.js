import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

       hr{
          margin: 50px 30px 30px 30px
          }
  .sair{
    color: #666666;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
    margin: 0px 50px 0px 0px;
  }
  .sair:hover{
    color: #c11b04
  }
  .localizacao{
    display:flex;
    justify-content: space-between;
    margin: 20px 0px 0px 100px;
  }
  .infoUser{
    display:flex;
  }
  .informacoes{
    display:flex;
    font-size: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 50%;
    flex-direction: column;
    margin: 40px 40px 50px 120px;
  }
  .info--User{
    width: 50%;
    display:flex;
    font-size: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 50%;
    flex-direction: column;
    margin: 40px 0px 0px 50px;
  }
  .senha_posicao{
    position: absolute;
    top: 88vh;
    left: 83vw;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }
  .Nova--requisicao{
    width: 20%;
    margin: auto;
    padding-top: 50px;
  }
  .posicao_requisicao{
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    font-size: 20px;
    border: 2px solid #c11b04;
    border-radius: 7px;
    margin-top: 50px;
    cursor: pointer;
  }
  .iconeMais{
    width: 40px;
    height: 40px;
    padding: 5px;
  }
`;
