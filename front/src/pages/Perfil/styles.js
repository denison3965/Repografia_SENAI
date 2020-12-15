import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;

       hr{
          margin-top: 50px;
          margin-left:30px;
          margin-right:30px;
          margin-bottom: 30px;
          }
  .sair{
    color: #666666;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
  }
  .sair:hover{
    color: #c11b04
  }
  .localizacao{
    display:flex;
    justify-content: space-between;
    margin: 20px;
  }
  .informacoes{
    position: absolute;
    left: 23vw;
  }
  .telefone{
    position: relative;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .email{
    position: relative;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .numero{
    position: relative;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .cargo{
    position: relative;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .nif{
    position: relative;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .informacao{
    position: absolute;
    margin-bottom: 30px;
    left: 55vw;
  }
  .senha_posicao{
    position: absolute;
    top: 88vh;
    left: 83vw;
    background-color: none;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
  }
  .posicao_requisicao{
    position: absolute;
    top: 72vh;
    left: 33vw;
    background-color: none;
    padding: 10px 150px;
    text-align: center;
    display: inline-block;
    font-size: 25px;
    border: 2px dashed #c11b04;
  }
  .posicao_avatar{
    position: absolute;
  }
  .posicao_maisinfo{
    position: relative;
    align-items: center;
    display: list-item;
    left: 2.5vw;
    cursor: pointer;
  }
  .posicao_do_form{}
`;
