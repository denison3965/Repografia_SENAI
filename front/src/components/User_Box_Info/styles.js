import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Titulo = styled.div`
  line-height: 60px;
  margin-left: 15px;
  font-size: 22px;
  font-weight: 300;
  width: 600px;
`;

export const Exit_Area = styled.div`
  margin-right: 30px;
  color: #666;

  @media only screen and (max-width: 1400px) {
    margin-right: 200px;
}
  
`;

export const User_Info = styled.div`
  display: flex;
  margin-right: 200px;
`;
