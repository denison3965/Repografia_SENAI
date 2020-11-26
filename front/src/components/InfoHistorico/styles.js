import styled from 'styled-components';

export const Container = styled.div`

    background-color: var(--color-branco);
    height: 130px;
    width: 100%;
    position: absolute;

    .infoHistorico{
        display: flex;
        justify-content: space-between;
    }
    .seu--historico{
        background-color: var(--color-azulMaisClaro);
        height: 50px;
        width: 150px;
        padding:10px;
        text-align: center;
        margin-top: 25px;
        border-radius: 7px;
        margin-right:20px;
    }
    .sair--button{
        height: 30px;
        width: 50px;
        color: #626262;
        cursor: pointer;
        margin-top: 25px;
        margin-right: 10px;
    }
`;
