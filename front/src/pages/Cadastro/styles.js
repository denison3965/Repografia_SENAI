import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Nav_Header = styled.div`
  
`;
export const Area_Cadastro = styled.div`
    margin-top: 15px;
    margin-left: 15px;

    .container_cadastro{
        margin-right:30px;
        margin-left:30px;
        .top_info{
            display:flex;
            margin-top: 15px;
            margin-bottom: 15px;
            h2{
                margin-top:10px;
                margin-left:10px;
            }
        }
        .area_botao{
            display: flex;
            justify-content: space-around;
            width:30%;
            margin: auto;
            @media only screen and (max-width: 1090px) {
                width: 50%;
            }
        }
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
      display: flex;
        li{
          color: #666;
          margin-right: 15px;
        }
    }
`;


