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
   display: flex;
   min-height: 500px;

  .espaco_grafico_1,
  .espaco_grafico_2{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

   @media screen and (max-width:1500px){
     flex-direction: column;

     .espaco_grafico_1 {
       margin-left: 100px;
     }

   }

`;
export const Tabela = styled.div`
   margin-top: -10px;
   margin-right: 100px;
   .loading_tabela {
      display: flex;
      justify-content: center;
      align-items: center;
   }


`;

export const Date_Area = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  .titulo_date{
    display: flex;

    span{
      color:red;
      margin-right: 10px;
    }
  }

  .date_area{
      display: flex;
      flex-direction: row;
      margin-left: 30px;

    }
  .date_area_into{
    margin-left: 30px;
  }  

  button {
    margin-left: 50px;
    margin-top: -5px;
  }
`;

