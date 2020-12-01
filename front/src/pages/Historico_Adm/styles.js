import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Adm_Area = styled.div`
    width: 88vw;
    min-height: 100vh;
    padding-left: 30px;

    @media only screen and (max-width: 1400px) {
      padding-left: 5rem;
    }
    @media only screen and (max-width: 1090px) {
      padding-left: 10rem;
    }

      .User_Box_Info_Area{
        margin-top: 20px;


        hr{
          margin-top: 50px;
          margin-left:30px;
          margin-right:30px;
          margin-bottom: 30px;
        }
      }
`;

export const Tabela = styled.div`

    .password_box{
      position: fixed;
      right: 50px;
      bottom: 50px;

    }
`;




export const Menu_Area = styled.div`
  width: 200px;



`;

export const Navegation = styled.nav`
  height:30px;
  width: 96%;
  border-radius: 5px;
  margin-left:30px;
  background-color: #D5ECF2;
  margin-bottom: 15px;
  padding-top: 4px;
      
    ul{
      list-style: none;
      margin-left: 15px;
        li{
          color: #666;
        }
    }
`;
