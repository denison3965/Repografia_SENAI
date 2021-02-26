import styled from 'styled-components';

export const Container = styled.div`
    
    display:flex;
    flex: 1;

    .grafico2{
        width: 700px;
        height: 300px;
        margin-top: -150px;
    }

    @media screen and (max-width:1600px){
        &{
            flex-direction: column;
            align-items: center;
            justify-content:center;
            margin-top: 20px;
    }
        .grafico2{
            margin-top:1px;
        }
    }
`;
