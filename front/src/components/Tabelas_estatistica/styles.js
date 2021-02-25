import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 30px;
  display: flex;

  .titulo{
      color: #666;
      text-align: center;
      margin-top: 30px;
      margin-bottom: 30px;
  }

  @media only screen and (max-width: 1400px) {
        flex-direction : column;
    }
`;

export const Tabela = styled.div`
    margin: 50px 50px 50px 50px;
    flex: 1;


`;
