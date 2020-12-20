import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Adm_Area = styled.div`
    width: 88vw;
    min-height: 100vh;
    padding-top: 50px;

    @media only screen and (max-width: 1600px) {
      padding-left: 5rem;
    }
    @media only screen and (max-width: 1090px) {
      
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

export const Information = styled.div`
  display: flex;
  margin-right: 30px;
  margin-left: 30px;

  @media only screen and (max-width: 1300px) {
      flex-direction: column;
      margin-left: 1px;
  }

  .registro_item{
    display: flex;
    margin-bottom: 30px;

    .registro_chave{
       margin-left: 5vw;
      }
    .registro_valor{
      margin-left: 2vw;
      }
        .registro_valor_img{
          margin-left: 2vw;
          display: flex;
            p {
              margin-left: 10px
            }
            .baixar_arquivo:hover{
              color: red;
              cursor: pointer;
            }
          }
  }

      .right-side{
        flex:1;

        

      }

      .left-side{
        flex:1;



      }
      .cancelar{
        position:fixed;
        right: 5px;
        bottom: 5px ;
        height:150px;
        width: 300px;
        z-index: 988;
        background-color: red;
        border: 2px solid red;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        color: white;

        @media only screen and (max-width: 1300px) {
          position:relative;
          margin-top: 30px;
          margin-left: 20px;
       }
      }
      .feedback{
        position:fixed;
        right: 5px;
        bottom: 160px ;
        height:400px;
        width: 300px;
        z-index: 988;
        border: 2px solid green;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        color: white;
        background-color: green;
        padding: 30px;

        @media only screen and (max-width: 1300px) {
          position:relative;
          margin-top: 30px;
          margin-left: 20px;
          bottom:0 ;
       }
      }
`;





export const Header_Area = styled.div`


`;