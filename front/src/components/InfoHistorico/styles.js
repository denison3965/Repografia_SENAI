import styled from 'styled-components';

export const Container = styled.div`

    background-color: var(--color-branco);
    height: 70px;
    width: 100%;

    .infoHistorico{
        display: flex;
        justify-content: space-between;
    }
    .button--voltar{
        cursor: pointer;
    }
    .seu--historico{
        background-color: var(--color-azulMaisClaro);
        height: 50px;
        width: 150px;
        padding:10px;
        text-align: center;
        border-radius: 7px;
    }
    .sair--button{
        height: 30px;
        width: 50px;
        color: #626262;
        cursor: pointer;
        margin-right: 10px;
    }
`;
