import styled from 'styled-components';

export const Container = styled.div`
    
    width: 80vw;
    display:flex;

    .grafico1{
        width: 45vw;
        height: 30vh;
    }

    .grafico2{
        width: 40vw;
        height: 30vh;
    }

    @media screen and (max-width:1600px){
        &{
            flex-direction: column;
            align-items: center;
            justify-content:center;
            margin-top: 20px;
    }
        .grafico2{
            margin-top: 155px;
        }
    }
`;
