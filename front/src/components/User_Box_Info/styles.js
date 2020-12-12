import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 98%;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
`;


export const Titulo = styled.div`
  line-height: 60px;
  margin-left: 15px;
  font-size: 22px;
  font-weight: 300;
  width: 90%;
`;

export const Exit_Area = styled.div`

  color: #666;
  width:100%;
  flex:1;
    p{
      cursor: pointer;
    }
    p:hover {
      color: red
    }

  @media only screen and (max-width: 1400px) {

}
  
`;

export const User_Info = styled.div`
  display: flex;
  flex: 9;
  width:100%;
`;
