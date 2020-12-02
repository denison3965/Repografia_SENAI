import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  hr{
      background-color: #c11b04;
  }
  .sair{
    position: relative;
    margin-top: 4px;
    left: 90vw;
    width: 5vw;
    color: #666666;
    background-color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }
  .localizacao{
    position: relative;
  }
  .seu_perfil{
    position: relative;
    left: 10vw;
    background-color: #D5ECF2;
    border: none;
    border-radius: 5px;
    color: #666666;
    padding: 5px 11px;
    text-align: center;
    display: inline-block;
    font-size: 25px;
    cursor: pointer;
  }
  .seu_historico{
    position: relative;
    left: 20vw;
    background-color: #D5ECF2;
    border: none;
    border-radius: 5px;
    color: #666666;
    padding: 5px 11px;
    text-align: center;
    display: inline-block;
    font-size: 25px;
    cursor: pointer;
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
