import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
`;

export const MenuLateral = styled.div`
  width: 200px;
  background-color: red;
  height: 500px;
`;

export const InfoBox = styled.div`
   width: 88vw;
   min-height: 100vh;
   padding-left: 30px;
   .user_box_info{
     margin-top: 20px;
   }


   @media only screen and (max-width: 1400px) {
      padding-left: 5rem;
    }
    @media only screen and (max-width: 1090px) {
      padding-left: 10rem;
    }

`;

export const Navegation = styled.nav`
  height:30px;
  width: 77vw;
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

export const Info = styled.div`
`;

export const Title = styled.div`
   font-size: 30px;
   width: 30vw;
   margin-left: 30px;
   color: black;
`;
export const Grafico = styled.div`
   margin-top: 30px;
`;
export const Tabela = styled.div`
   margin-top: 150px;
   margin-right: 100px

`;

