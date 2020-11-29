import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Adm_Area = styled.div`
    width: 88vw;
    min-height: 100vh;

    @media only screen and (max-width: 1600px) {
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

export const Information = styled.div`
  display: flex;
  margin-right: 30px;
  margin-left: 30px;

      .right-side{
        flex:1;
        height: 50px;
        background-color: red;
      }
      .left-side{
        flex:1;
        height: 50px;
        background-color: blue;
      }
`; 





export const Menu_Area = styled.div`
  width: 12vw;

`;